//
const { Router } = require("express");
const router = Router();

const dateUserAuthController = require("../controllers/userDateAuthController");
const checkAuth = require("../middleware/checkAuth");
const controlCacheMiddleware = require("../middleware/controlCachemiddleware");

router.post(
  "/dateUserAuth",
  controlCacheMiddleware,
  checkAuth
  //dateUserAuthController
);

module.exports = router;
