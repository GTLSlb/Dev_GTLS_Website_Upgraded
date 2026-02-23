const {
  index_data,
  format_search_results,
  search_typesense_collections,
  delete_all_typesense_collections,
} = require("../utils/typesense.utils");
const logger = require("../shared-utils/logging");
const STATUS = require("../shared-utils/status-code");

const searchCache = new Map();
const SEARCH_CACHE_TTL = 5 * 60 * 1000;

class TypesenseController {
  async search(req, res) {
    const query = req.params.query || req.query.q;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!query) {
      return res.status(STATUS.BAD_REQUEST).json({
        error: "Missing search query. Please provide a query parameter.",
      });
    }

    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(STATUS.BAD_REQUEST).json({
        error: "Invalid pagination parameters.",
      });
    }

    try {
      const cacheKey = query.toLowerCase().trim();
      let all_hits, grandTotal;

      searchCache.clear(); // temporary, remove after testing

      // Check cache
      const cached = searchCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < SEARCH_CACHE_TTL) {
        logger.info("✅ Using cached search results");
        all_hits = cached.hits;
        grandTotal = cached.total;
      } else {
        logger.info("🔍 Performing fresh search");

        // 1. Fetch a large batch per collection so pagination works correctly
        const results = await search_typesense_collections(query, 100);

        console.log(
          "Raw Typesense results:",
          JSON.stringify(
            results.map((r) => ({
              collection: r.collection || r.request_params?.collection_name,
              found: r.found,
              hits_returned: r.hits?.length,
            })),
            null,
            2,
          ),
        );

        // 3. Format and enrich results
        const formatted_results = await format_search_results(results);

        // 4. Flatten all hits, attach collection name, and sort by score
        all_hits = formatted_results.results
          .flatMap((collection) =>
            collection.hits.map((hit) => ({
              ...hit,
              collection: collection.collection,
            })),
          )
          .sort((a, b) => b.score - a.score);

        // 2. Get grand total from Typesense's 'found' field (true total in index)
        grandTotal = all_hits.length;

        console.log("Total fetched and formatted:", all_hits.length);
        console.log("Grand total across all collections:", grandTotal);

        // 5. Cache results
        searchCache.set(cacheKey, {
          hits: all_hits,
          total: grandTotal,
          timestamp: Date.now(),
        });

        // Cleanup old cache entries
        if (searchCache.size > 100) {
          const oldestKey = searchCache.keys().next().value;
          searchCache.delete(oldestKey);
        }
      }

      // 6. Apply pagination to sorted all_hits
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      console.log("Index", startIndex, endIndex);

      const paginatedHits = all_hits.slice(startIndex, endIndex);

      console.log(
        `Page ${page}: Returning hits ${startIndex}-${endIndex} (${paginatedHits.length} results)`,
      );

      // 7. Group back by collection for response format
      const collectionMap = new Map();
      for (const hit of paginatedHits) {
        if (!collectionMap.has(hit.collection)) {
          collectionMap.set(hit.collection, []);
        }
        collectionMap.get(hit.collection).push(hit);
      }

      const paginatedResults = Array.from(collectionMap.entries()).map(
        ([collection, hits]) => ({
          collection,
          found: hits.length,
          hits,
        }),
      );

      return res.status(STATUS.OK).json({
        query: query,
        total_hits: grandTotal,
        pagination: {
          current_page: page,
          per_page: limit,
          total_pages: Math.ceil(grandTotal / limit),
          has_more: endIndex < all_hits.length, // use actual fetched count, not grandTotal
        },
        results: paginatedResults,
      });
    } catch (e) {
      console.error("🛑 Fatal search error:", e.message);
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        error: "Failed to perform search operation",
        details: e.message,
      });
    }
  }

  async re_index(req, res) {
    try {
      await index_data();
      return res
        .status(STATUS.OK)
        .json({ message: "Data indexed successfully", status: STATUS.OK });
    } catch (err) {
      logger.error(`🛑 Failed to index data: ${err}`);
      if (err.toString().trim().includes("ECONNREFUSED"))
        return res.status(STATUS.SERVICE_UNAVAILABLE).json({
          error: "Failed to index data: Typesense server is not running",
          status: STATUS.SERVICE_UNAVAILABLE,
          message: "Failed to index data: Typesense server is not running",
        });
      if (err.toString().toLowerCase().trim().includes("bad request"))
        return res.status(STATUS.BAD_REQUEST).json({
          error: "Failed to index data: Bad Request",
          status: STATUS.BAD_REQUEST,
          message: "Failed to index data: Bad Request",
        });
      else {
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
          error: `Failed to index data: ${err.message}`,
          status: STATUS.INTERNAL_SERVER_ERROR,
          message: `Failed to index data: ${err.message}`,
        });
      }
    }
  }

  async delete_all_collections(req, res) {
    try {
      await delete_all_typesense_collections();
      return res
        .status(STATUS.OK)
        .json({ message: "All collections deleted successfully" });
    } catch (err) {
      console.error("🛑 Failed to delete collections:", err.message);
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        error: "Failed to delete collections",
        details: err.message,
      });
    }
  }
}

module.exports = new TypesenseController();
