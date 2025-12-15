const express = require("express");
const router = express.Router();
const TypesenseController = require("../controllers/typesense.controller");

// Search
router.get(
  "/search",
  TypesenseController.search.bind(TypesenseController)
);

// Re-index Data
router.get(
  "/re-index",
  TypesenseController.re_index.bind(TypesenseController)
);

// Delete All Collections
router.get(
  "/delete-all-collections",
  TypesenseController.delete_all_collections.bind(TypesenseController)
);

module.exports = router;
