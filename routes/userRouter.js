//
const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

//const uploadMiddleware = require("../Middleware/uploadMiddleware");
//const uploadController = require("../controllers/uploadController");

router.get("/user", userController);
//router.get("/upload", uploadMiddleware, uploadController);

module.exports = router;
