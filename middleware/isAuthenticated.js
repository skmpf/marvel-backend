// import User model
const User = require("../models/User");

// isAuthenticated function checks if User is logged in
const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const user = await User.findOne({ token: token.replace("Bearer ", "") });
    if (!user) {
      res.json({ error: "Unauthorized" });
    } else {
      req.user = user;
      next();
    }
  } else {
    res.json({ error: "Unauthorized" });
  }
};

module.exports = isAuthenticated;
