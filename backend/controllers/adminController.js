const User = require("../models/User");
const Bus = require("../models/Bus");
const bcrypt = require("bcryptjs");

exports.createDriver = async (req, res) => {
  const { name, email, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const driver = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "driver"
  });

  res.json(driver);
};

exports.addBus = async (req, res) => {
  const bus = await Bus.create(req.body);
  res.json(bus);
};
