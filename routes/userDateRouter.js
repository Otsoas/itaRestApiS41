//
const { Router } = require("express");
const router = Router();

const dateUserController = require("../controllers/userDateController");
// const checkAuth = require("../Middleware/checkAuth");
// const controlCacheMiddleware = require("../Middleware/controlCachemiddleware");

router.post("/dateUser", dateUserController);

module.exports = router;
