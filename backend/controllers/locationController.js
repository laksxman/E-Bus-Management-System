const Location = require("../models/Location");

exports.getBusLocation = async (req, res) => {
  const location = await Location.findOne({ busId: req.params.busId })
    .sort({ updatedAt: -1 });

  res.json(location);
};
