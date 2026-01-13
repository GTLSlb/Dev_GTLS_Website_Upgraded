const {
  index_data,
  runQuerySlug,
  format_search_results,
  search_typesense_collections,
  delete_all_typesense_collections,
} = require("../utils/typesense.utils");
const logger = require("../shared-utils/logging");
const STATUS = require("../shared-utils/status-code");

class TypesenseController {
  async search(req, res) {
    const query = req.params.query || req.query.q;
    if (!query) {
      return res.status(STATUS.BAD_REQUEST).json({
        error: "Missing search query. Please provide a query parameter.",
      });
    }
    try {
      const results = await search_typesense_collections(query);
      const formatted_results = await format_search_results(results);

      return res.status(STATUS.OK).json({
        query: query,
        total_hits: formatted_results.total_hits,
        results: formatted_results.results,
      });
    } catch (e) {
      console.error("🛑 Fatal search error:", e.message);

      // 4. Handle error by sending an HTTP 500 response
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
      console.log(`🛑 Failed to index data: ${err}`);
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
