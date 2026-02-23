const logger = require("../shared-utils/logging");
const typesense_client = require("./typesense.client");
const { runStrapiQuery } = require("../utils/auth.utils");
const { enrich_collection_with_urls } = require("./strapi_constants.utils");

const exactExclusions = [
  "action_events",
  "careers",
  "home_pages",
  "i18n_locale",
  "links",
  "map_settings",
  "migrations",
  "navigation_links",
  "train_notifications",
  "values",
  "files",
  "footers",
  "heared_froms",
  "search_indices",
  "components_elements_footer_menus",
	"components_elements_footer_menus_cmps",
	"components_elements_footer_menu_items",
	"components_layout_footers",
	"components_layout_footers_cmps",
	"footers",
	"footers_cmps",
  "components_layout_nav_bars",
	"components_layout_nav_bars_cmps",
	"components_layout_nav_items",
	"components_layout_nav_items_children",
	"components_layout_nav_items_cmps",
	"navbars",
	"navbars_cmps",
];
const patternExclusions = [
  "admin_%",
  "files_%",
  "footers_%",
  "logz%",
  "strapi_%",
  "nav_%",
  "nova_%",
  "up_%",
  "upload_%",
  "files_%",
  "%_cmps"
];

const get_filtered_db_tables = async () => {
  try {
    // --- Get Filtered Table Names ---
    const database_name = process.env.STRAPI_DB_NAME;

    // Construct exclusion lists for SQL query
    const exactExclusionList = exactExclusions
      .map((table) => `'${table}'`)
      .join(", ");
    const patternExclusionConditions = patternExclusions
      .map((pattern) => `table_name NOT LIKE '${pattern}'`)
      .join(" AND ");

    // Query INFORMATION_SCHEMA.TABLES to get the list of tables to process
    const tableListSql = `
        SELECT table_name
        FROM INFORMATION_SCHEMA.TABLES
        WHERE table_schema = '${database_name}'
          AND table_type = 'BASE TABLE'
          AND table_name NOT IN (${exactExclusionList})
          AND (${patternExclusionConditions})
    `;

    const tableListResult = await runStrapiQuery(tableListSql);

    // Extract the main key (table_name) dynamically to handle different database schemas
    const main_key = Object.keys(tableListResult[0] || {})[0];
    const tableNames = tableListResult.map((row) => row[main_key]);

    // Handle case where no tables are found
    if (tableNames.length === 0) {
      logger.info(
        "📢 No tables found to index after applying exclusion filters.",
      );
      return { success: true, tables: [] };
    }

    logger.info(`✅ Found ${tableNames.length} tables to process.`);

    // ---  Fetch Data from Each Filtered Table ---
    const allTableData = [];
    for (const tableName of tableNames) {
      try {
        const dataSql = `SELECT * FROM \`${tableName}\``;
        const tableData = await runStrapiQuery(dataSql);

        allTableData.push({
          table_name: tableName,
          data: tableData,
        });
      } catch (innerError) {
        logger.error(
          `🛑 Failed to fetch data from table '${tableName}': ${innerError.message}`,
        );
      }
    }

    return { success: true, tables: allTableData };
  } catch (error) {
    // Log fatal error for table list retrieval
    logger.error(
      "🛑 Failed to retrieve and fetch data from DB tables: " + error.message,
    );
    // Rethrow a clear error
    throw new Error(
      "🛑 Indexing setup failed: Could not retrieve table list or data.",
      { cause: error },
    );
  }
};

const generate_collection_schema = (collectionName, data) => {
  if (!data || data.length === 0) {
    throw new Error("Cannot generate schema from empty data array.");
  }

  const firstDoc = data[0];
  const fields = [];

  for (const key in firstDoc) {
    if (Object.hasOwnProperty.call(firstDoc, key)) {
      let fieldType = "auto"; // Use 'auto' to let Typesense infer the type

      // Check if field is 'id' and set to 'string' if it's the primary key
      if (key.toLowerCase() === "id") {
        fieldType = "string";
      }

      fields.push({
        name: key,
        type: fieldType,
        optional: true, // Make all fields optional for flexibility
      });
    }
  }

  // Add a wildcard field for auto-schema detection on fields not explicitly defined
  fields.push({ name: ".*", type: "auto" });

  return {
    name: collectionName,
    fields: fields,
  };
};

const index_table_in_typesense = async (tableName, tableData) => {
  // Check if collection exists and create if it doesn't
  // Adding a small delay to ensure Typesense is ready before we check/create collections
  await new Promise((r) => setTimeout(r, 100));
  logger.info(`🔍 Checking if Typesense collection '${tableName}' exists...`);
  try {
    await typesense_client.collections(tableName).retrieve();
    logger.info(
      `Collection '${tableName}' already exists. Skipping schema creation.`,
    );
  } catch (error) {
    if (error.httpStatus === 404) {
      logger.info(`⏳ Creating Typesense collection: '${tableName}'`);

      // Generate schema from the data
      const schema = generate_collection_schema(tableName, tableData);
      await typesense_client.collections().create(schema);

      logger.info(
        `✅ Typesense collection '${tableName}' created successfully.`,
      );
    } else {
      // Re-throw other errors (e.g., connection, permissions)
      logger.error("🛑 Error creating Typesense collection:", error);
      throw error;
    }
  }

  // Prepare and Import documents
  if (tableData.length > 0) {
    logger.info(
      `⏳ Indexing ${tableData.length} documents into '${tableName}'...`,
    );

    // Convert the id field to a string if it's a number, as Typesense recommends string IDs.
    const documents = tableData.map((doc) => ({
      ...doc,
      id: String(doc.id),
    }));

    // Use the import endpoint for bulk indexing with 'upsert' action
    // to handle potential existing documents (though unlikely here) or just 'create'
    const importResult = await typesense_client
      .collections(tableName)
      .documents()
      .import(documents, { action: "upsert" });

    // Count successful imports
    const successes = importResult.filter((r) => r.success).length;
    const failures = importResult.filter((r) => !r.success);

    logger.info(
      `✅ Successfully indexed ${successes} records in '${tableName}'. ${failures.length} failed.`,
    );
    if (failures.length > 0) {
      logger.warn("Sample document import failures:", JSON.stringify(failures));
    }
  } else {
    logger.info(`🤷 Table '${tableName}' is empty. Skipping indexing.`);
  }
};

const index_data = async () => {
  logger.info("⏳ Fetching tables to be indexed and their data...");
  const { tables } = await get_filtered_db_tables();
  logger.info(`📊 Starting indexing process for ${tables.length} tables...`);
  let failures = [];

  for (const tableObject of tables) {
    logger.info(`📊 ${JSON.stringify(tableObject, null, 2)}`);
    const tableName = tableObject.table_name;
    const tableData = tableObject.data;

    try {
      // Create collection and index data
      tableData.length > 0 &&
        (await index_table_in_typesense(tableName, tableData));
    } catch (e) {
      logger.error(`🛑 Failed to process table '${tableName}': ${e.message}`);
      failures.push({ table: tableName, error: e.message });
    }
  }

  // Return failures if any
  if (Object.keys(failures).length > 0) {
    throw new Error("Indexing failed for some tables.", { cause: failures });
  }
};

const perform_search = async (searches) => {
  try {
    // 1. Create an array of search promises immediately
    const searchPromises = searches.map(search =>
      typesense_client
        .collections(search.collection)
        .documents()
        .search({
          q: search.q,
          per_page: 100,
          query_by: search.query_by,
          drop_tokens_threshold: search.drop_tokens_threshold,
        })
        .then(result => ({
          collection: search.collection,
          found: result.found,
          hits: result.hits,
        }))
    );

    // 2. Wait for all of them to resolve in parallel
    const search_results = await Promise.all(searchPromises);
    return search_results;

  } catch (error) {
    logger.error(`🛑 Typesense search failed: ${error.message}`);
    throw new Error("Failed to execute search query.", { cause: error });
  }
};


let cachedCollectionFields = null;
let lastCacheUpdate = 0;
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

// Cache collection fields
// Add this to your cache function
const getSearchableFields = async () => {
  const now = Date.now();
  if (cachedCollectionFields && (now - lastCacheUpdate < CACHE_TTL)) {
    return cachedCollectionFields;
  }

  const collectionsResult = await typesense_client.collections().retrieve();
  
  // Get document counts in parallel
  const collectionStats = await Promise.all(
    collectionsResult.map(async (col) => {
      try {
        const stats = await typesense_client.collections(col.name).retrieve();
        return { name: col.name, num_documents: stats.num_documents, fields: col.fields };
      } catch (err) {
        return null;
      }
    })
  );

  cachedCollectionFields = collectionStats
    .filter(col => col && col.num_documents > 0) // Skip empty collections
    .filter(col => !col.name.includes('_cmps')) // Skip linking tables
    .filter(col => !col.name.startsWith('admin_')) // Skip admin tables
    .map(col => ({
      name: col.name,
      fields: col.fields
        .filter(f => f.index && f.name !== ".*" && f.type === "string")
        .map(f => f.name)
    }))
    .filter(col => col.fields.length > 0);

  lastCacheUpdate = now;
  logger.info(`📊 Updated cache: ${cachedCollectionFields.length} searchable collections.`);
  return cachedCollectionFields;
};

const search_typesense_collections = async (query, page = 1, perPage = 10) => {
  if (!query?.trim()) return { error: "Search query cannot be empty." };

  try {
    // 1. Get fields from cache (Instant after the first run)
    const collectionsFields = await getSearchableFields();

    if (collectionsFields.length === 0) return { results: [] };

    // 2. Map directly to search objects
    const searches = collectionsFields.map(col => ({
      collection: col.name,
      q: query,
      query_by: col.fields.join(","),
      drop_tokens_threshold: 1,
      infix: false,
      prioritize_exact_match: true,
      per_page: perPage
    }));

    // 3. Execute Multi-Search
    return await perform_search(searches);

  } catch (error) {
    logger.error(`🛑 Search failed: ${error.message}`);
    throw new Error("Failed to execute search query.");
  }
};

async function format_search_results(search_results) {
  // Early exit if no results
  if (!search_results || search_results.length === 0) {
    return { total_hits: 0, results: [] };
  }

  // 1. Filter and prepare in a single pass (avoid double iteration)
  const collectionTasks = [];
  
  for (const collection_result of search_results) {
    if (collection_result.found === 0) continue;

    const seenInThisCollection = new Set();
    const cleanedHits = [];

    for (const hit of collection_result.hits) {
      // Extract title once
      const title = hit.title 
        || hit.name 
        || hit.document?.title 
        || hit.document?.name 
        || hit.document?.label 
        || hit.document?.description?.slice(0, 12);

      if (!title) continue;

      // Check for duplicates
      const uniqueKey = `${hit.id}_${title}`;
      if (seenInThisCollection.has(uniqueKey)) continue;
      seenInThisCollection.add(uniqueKey);

      // Add cleaned hit
      cleanedHits.push({
        id: hit.id,
        title: title,
        type: collection_result.collection,
        score: hit.text_match,
        document: hit.document,
      });
    }

    if (cleanedHits.length > 0) {
      collectionTasks.push({
        collectionName: collection_result.collection,
        hits: cleanedHits
      });
    }
  }

  // Early exit if no valid hits after filtering
  if (collectionTasks.length === 0) {
    return { total_hits: 0, results: [] };
  }

  // 2. Parallel Enrichment (Already optimal with Promise.all)
  const enrichedResults = await Promise.all(
    collectionTasks.map(async (task) => {
      const enrichedHits = await enrich_collection_with_urls(task.collectionName, task.hits);
      
      return {
        collection: task.collectionName,
        found: enrichedHits.length,
        hits: enrichedHits,
      };
    })
  );

  // 3. Calculate global total (single pass)
  const global_total = enrichedResults.reduce((sum, res) => sum + res.found, 0);

  return { total_hits: global_total, results: enrichedResults };
}

const delete_all_typesense_collections = async () => {
  try {
    // Retrieve all collections
    const collections = await typesense_client.collections().retrieve();

    logger.info(`Found ${collections.length} collections to delete`);

    // Delete each collection
    for (const collection of collections) {
      logger.info(`Deleting collection: ${collection.name}`);
      await typesense_client.collections(collection.name).delete();
      logger.info(`✅ Deleted collection: ${collection.name}`);
    }

    logger.info("All collections deleted successfully");
  } catch (error) {
    console.error("Error deleting collections:", error.message);
    throw error;
  }
};

module.exports = {
  index_data,
  runStrapiQuery,
  getSearchableFields,
  format_search_results,
  search_typesense_collections,
  delete_all_typesense_collections,
};
