const Location = require("../models/Location");

exports.updateLocation = async (req, res) => {
  const { busId, latitude, longitude } = req.body;

  const location = await Location.create({
    busId,
    latitude,
    longitude
  });

  res.json(location);
};
