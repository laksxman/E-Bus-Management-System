const express = require("express");
const { getBusLocation } = require("../controllers/locationController");

const router = express.Router();

router.get("/:busId", getBusLocation);

module.exports = router;
