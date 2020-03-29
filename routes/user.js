// import packages
const express = require("express");
const router = express.Router();

// import of User model
const User = require("../models/User");

// Requirements for secure Sign In and Sign Up
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

// SIGN UP ROUTE
router.post("/user/sign_up", async (req, res) => {
  try {
    //   check if new user already exists
    const user = await User.findOne({ email: req.fields.email });
    if (user) {
      res.json({ message: "This email is already in use" });
    } else {
      // create an account for user if all fields have been entered
      if (req.fields.email && req.fields.username && req.fields.password) {
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(req.fields.password + salt).toString(encBase64);

        const newUser = new User({
          email: req.fields.email,
          username: req.fields.username,
          token,
          salt,
          hash,
          created: new Date()
        });
        await newUser.save();
        res.json({
          id: newUser.id,
          token: newUser.token,
          username: newUser.username
        });
      }
    }
  } catch (error) {
    res.json(error.message);
  }
});

// LOG IN ROUTE
router.post("/user/sign_in", async (req, res) => {
  try {
    //   check if user trying to login exists
    const user = await User.findOne({ email: req.fields.email });
    if (user) {
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/user/favorites", (req, res) => {
  res.json({ message: "Favorites" });
});

module.exports = router;
