const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createDriver, addBus } = require("../controllers/adminController");

const router = express.Router();

router.post("/create-driver", auth, role("admin"), createDriver);
router.post("/add-bus", auth, role("admin"), addBus);

module.exports = router;
