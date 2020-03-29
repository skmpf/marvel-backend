// import mongodb package
const mongoose = require("mongoose");

// define Favorite mongodb model
const Favorite = mongoose.model("Favorite", {
  category: { type: String },
  title: { type: String },
  description: { type: String },
  picture: { type: String },
  created: { type: Date, default: Date.now },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = Favorite;
