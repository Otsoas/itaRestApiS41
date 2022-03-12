//
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({
  storage: storage,
  dest: path.join(__dirname, "../public/uploads"),
  limits: {
    fileSize: 20000000,
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|svg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: El archivo no es correcto");
  },
}).single("file");

module.exports = uploadMiddleware;
