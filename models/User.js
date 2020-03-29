// import mongodb package
const mongoose = require("mongoose");

// define User mongodb model
const User = mongoose.model("User", {
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  token: String,
  salt: String,
  hash: String,
  created: { type: Date, default: Date.now }
});

module.exports = User;
