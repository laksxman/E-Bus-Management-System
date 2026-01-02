const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { updateLocation } = require("../controllers/driverController");

const router = express.Router();

router.post("/update-location", auth, role("driver"), updateLocation);

module.exports = router;
