const connection = require("../database/strapi.connection");
const logger = require("../shared-utils/logging");
const typesense_client = require("./typesense.client");
const enrich_collection_with_urls = require("./strapi_constants.utils").enrich_collection_with_urls;

const exactExclusions = [
  "action_events",
  "careers",
  "contact_uses",
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
];
const patternExclusions = [
  "%_cmps%",
  "%_Ink%",
  "%_lnk%",
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
  "components_layout_%",
];

const runQuery = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};


const get_filtered_db_tables = async () => {
  try {
    // --- Get Filtered Table Names ---

    const database_name = process.env.STRAPI_DB_NAME;
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

    const tableListResult = await runQuery(tableListSql);
    const tableNames = tableListResult.map((row) => row.TABLE_NAME);

    // Handle case where no tables are found
    if (tableNames.length === 0) {
      logger.info(
        "📢 No tables found to index after applying exclusion filters."
      );
      return { success: true, tables: [] };
    }

    logger.info(
      `✅ Found ${tableNames.length} tables to process: ${tableNames.join(
        ", "
      )}`
    );

    // ---  Fetch Data from Each Filtered Table ---
    const allTableData = [];

    for (const tableName of tableNames) {
      try {
        const dataSql = `SELECT * FROM \`${tableName}\``;
        const tableData = await runQuery(dataSql);

        allTableData.push({
          table_name: tableName,
          data: tableData,
        });
      } catch (innerError) {
        logger.error(
          `🛑 Failed to fetch data from table '${tableName}': ${innerError.message}`
        );
      }
    }

    return { success: true, tables: allTableData };
  } catch (error) {
    // Log fatal error for table list retrieval
    logger.error(
      "🛑 Failed to retrieve and fetch data from DB tables: " + error.message
    );
    // Rethrow a clear error
    throw new Error(
      "🛑 Indexing setup failed: Could not retrieve table list or data.",
      { cause: error }
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
  try {
    await typesense_client.collections(tableName).retrieve();
    logger.info(
      `Collection '${tableName}' already exists. Skipping schema creation.`
    );
  } catch (error) {
    if (error.httpStatus === 404) {
      console.log(`⏳ Creating Typesense collection: '${tableName}'`);

      // Generate schema from the data
      const schema = generate_collection_schema(tableName, tableData);
      await typesense_client.collections().create(schema);

      logger.info(
        `✅ Typesense collection '${tableName}' created successfully.`
      );
    } else {
      // Re-throw other errors (e.g., connection, permissions)
      console.log("🛑 Error creating Typesense collection:", error);
      throw error;
    }
  }

  // Prepare and Import documents
  if (tableData.length > 0) {
    console.log(
      `⏳ Indexing ${tableData.length} documents into '${tableName}'...`
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
      `✅ Successfully indexed ${successes} records in '${tableName}'. ${failures.length} failed.`
    );
    if (failures.length > 0) {
      logger.warn("Sample document import failures:", JSON.stringify(failures));
    }
  } else {
    logger.info(`🤷 Table '${tableName}' is empty. Skipping indexing.`);
  }
};

const index_data = async () => {
  console.log("⏳ Fetching tables to be indexed and their data...");
  const { tables } = await get_filtered_db_tables();
  let failures = [];
  for (const tableObject of tables) {
    const tableName = tableObject.table_name;
    const tableData = tableObject.data;
    try {
      // Create collection and index data
      tableData.length > 0 &&
        (await index_table_in_typesense(tableName, tableData));
    } catch (e) {
      logger.error(`🛑 Failed to process table '${tableName}': ${e.message}`);
      console.log(`🛑 Failed to process table '${tableName}': ${e.message}`);
      failures.push({ table: tableName, error: e.message });
    }
  }

  // Return failures if any
  if (Object.keys(failures).length > 0) {
    throw new Error("Indexing failed for some tables.", { cause: failures });
  }
};

const perform_search = async (searches) => {
  const search_results = [];
  for (const search of searches) {
    console.log(
      '⏳ Searching in Typesense collection "',
      search.collection,
      '"...'
    );
    console.log("⏳", search);
    try {
      // Correct way to search in Typesense
      const result = await typesense_client
        .collections(search.collection)
        .documents()
        .search({
          q: search.q,
          query_by: search.query_by,
          drop_tokens_threshold: search.drop_tokens_threshold,
        });

      search_results.push({
        collection: search.collection,
        found: result.found,
        hits: result.hits,
      });
    } catch (error) {
      logger.error(`🛑 Typesense search failed: ${error.message}`);
      if (error.response && error.response.data) {
        logger.error("Typesense error details:", error.response.data);
      }
      throw new Error("Failed to execute search query.", { cause: error });
    }
  }

  return search_results;
};

const search_typesense_collections = async (query) => {
  if (!query || query.trim() === "") {
    return { error: "Search query cannot be empty." };
  }

  // --- Fetch All Collection Names ---
  let collectionNames = [],
    collectionsFields = [];
  try {
    const collectionsResult = await typesense_client.collections().retrieve();

    // Extract collection names
    collectionNames = collectionsResult.map((c) => c.name);

    // Fetch schema details for each collection
    const collectionSchemas = {};

    for (const collection of collectionsResult) {
      const schema = await typesense_client
        .collections(collection.name)
        .retrieve();

      collectionSchemas[collection.name] = schema.fields;
    }

    collectionsFields = Object.entries(collectionSchemas).map(
      ([name, fields]) => {
        return {
          name: name,
          fields: fields
            .filter((field) => {
              // Only include fields that are explicitly indexed AND
              // are not the special Typesense wildcard field.
              return (
                field.index === true &&
                field.name !== ".*" &&
                field.type == "string"
              );
            })
            .map((field) => field.name),
        };
      }
    );
  } catch (e) {
    logger.error(
      `🛑 Failed to retrieve collection list from Typesense: ${e.message}`
    );
    throw new Error("Failed to get collection list for search.", { cause: e });
  }

  if (collectionNames.length === 0) {
    logger.warn("⚠️ No collections found in Typesense to search.");
    return { results: [] };
  }

  // --- Define Search Fields ---
  const searches = collectionsFields.map((collection) => {
    const { name, fields } = collection;
    if (fields?.length == 0) {
      return null;
    }
    return {
      collection: name,
      q: query,
      query_by: fields.join(", "),
      drop_tokens_threshold: 1,
    };
  });

  // --- Execute Multi-Search ---
  try {
    // Filter out null results and perform search
    const search_results = await perform_search(
      searches.filter((s) => s !== null)
    );

    return search_results;
  } catch (error) {
    logger.error(`🛑 Typesense search failed: ${error.message}`);
    if (error.response && error.response.data) {
      logger.error("Typesense error details:", error.response.data);
    }
    throw new Error("Failed to execute search query.", { cause: error });
  }
};

async function format_search_results(search_results) {
  const results = [];
  let total_hits = 0;

  for (const collection_result of search_results) {
    if (collection_result.found > 0) {
      total_hits += collection_result.found;

      // Format basic hit data
      const hits = collection_result.hits.map((hit) => ({
        id: hit.document.id,
        // Assign a generic name/title field for easier consumption by the client
        title: hit.document.title || hit.document.name || "Untitled Document",
        type: collection_result.collection, // Useful for the client to know the source
        score: hit.text_match,
        document: hit.document, // Include the full document data
      }));

       // Enrich with URLs
      const enrichedHits = await enrich_collection_with_urls(
        collection_result.collection,
        hits
      );

      results.push({
        collection: collection_result.collection,
        found: collection_result.found,
        hits: enrichedHits,
      });
    }
    
  };

  return { total_hits: total_hits, results: results };
}

const delete_all_typesense_collections = async () => {
  try {
    // Retrieve all collections
    const collections = await typesense_client.collections().retrieve();

    console.log(`Found ${collections.length} collections to delete`);

    // Delete each collection
    for (const collection of collections) {
      console.log(`Deleting collection: ${collection.name}`);
      await typesense_client.collections(collection.name).delete();
      console.log(`✅ Deleted collection: ${collection.name}`);
    }

    console.log("All collections deleted successfully");
  } catch (error) {
    console.error("Error deleting collections:", error.message);
    throw error;
  }
};

module.exports = {
  runQuery,
  index_data,
  delete_all_typesense_collections,
  format_search_results,
  search_typesense_collections,
};
