const Bus = require("../models/Bus");
const Location = require("../models/Location");

exports.searchBus = async (req, res) => {
  const { source, destination } = req.query;

  const buses = await Bus.find({ source, destination });

  const result = await Promise.all(
    buses.map(async (bus) => {
      const location = await Location.findOne({ busId: bus._id }).sort({ updatedAt: -1 });
      return { bus, location };
    })
  );

  res.json(result);
};
