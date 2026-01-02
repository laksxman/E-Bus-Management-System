const Log = require("../models/Log");

const logger = async (userId, action) => {
  await Log.create({ userId, action });
};

module.exports = logger;
