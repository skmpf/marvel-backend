// import packages
require("dotenv").config();
const express = require("express");
const app = express();
const formidable = require("express-formidable");
app.use(formidable({ multiples: true }));
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

// set mongodb connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// import of User routes
const UserRoutes = require("./routes/user");
app.use(UserRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello Marvel" });
});

app.all("*", (req, res) => {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
