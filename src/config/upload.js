const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
      limits: {fileSize: 1000000},
      destination: path.join(__dirname, "..", "..", "uploads"),
      filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;

        cb(null, fileName);
      },
    }),
};

