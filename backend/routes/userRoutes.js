const express = require("express");
const auth = require("../middleware/authMiddleware");
const { searchBus } = require("../controllers/userController");

const router = express.Router();

router.get("/search", auth, searchBus);

module.exports = router;
