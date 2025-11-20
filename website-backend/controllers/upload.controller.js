require("dotenv").config({ path: "./.env" });
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = "./public/uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

class UploadController {
  async uploadFile(req, res) {
    const upload = multer({ storage }).single("file");
    upload(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error uploading file" });
      }
      return res.status(200).json({
        message: "File uploaded successfully",
        filename: req.file.filename,
      });
    });
  }
}

module.exports = new UploadController();
