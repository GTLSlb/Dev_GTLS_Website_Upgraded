const express = require("express");
const router = express.Router();

const uploadController = require("../controllers/upload.controller");

router.post("/upload-file", uploadController.uploadFile);

module.exports = router;