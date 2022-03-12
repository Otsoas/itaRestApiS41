//
const { Router } = require("express");
const router = Router();

const dateUserAuthArrayController = require("../controllers/userDateAuthArrayController");
const checkAuthArray = require("../middleware/checkAuthArray");
const controlCacheMiddleware = require("../middleware/controlCachemiddleware");

router.post(
  "/dateUserAuthArray",
  controlCacheMiddleware,
  checkAuthArray,
  dateUserAuthArrayController
);

module.exports = router;
