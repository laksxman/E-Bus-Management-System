const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busNumber: String,
  busType: String,
  source: String,
  destination: String,
  contactNumber: String,
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Bus", busSchema);
