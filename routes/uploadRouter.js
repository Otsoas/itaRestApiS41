//
const { Router } = require("express");
const router = Router();

const uploadMiddleware = require("../middleware/uploadMiddleware");
const uploadController = require("../controllers/uploadController");

router.post("/upload", uploadMiddleware, uploadController);

module.exports = router;
