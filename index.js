require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const axios = require("axios");
const md5 = require("js-md5");

const timeStamp = 1;
const privateKey = process.env.MARVEL_SKEY;
const publicKey = process.env.MARVEL_PKEY;
const hash = md5(timeStamp + privateKey + publicKey);

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

app.get("/character/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
    const characters = response.data.data.results;

    // const found = [];
    // for (let i = 0; i < characters.length; i++) {
    //   if (characters[i].id === Number(req.params.id)) {
    //     found.push(characters[i]);
    //   }
    // }
    // const character = found;
    console.log(characters);

    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

// app.get("/user/sign_in", async (req, res) => {
//   try {
//     res.json("SignIn");
//   } catch (error) {
//     res.json(error.message);
//   }
// });

// app.get("/user/sign_up", async (req, res) => {
//   try {
//     res.json("SignUp");
//   } catch (error) {
//     res.json(error.message);
//   }
// });

app.get("/user/favorites", (req, res) => {
  res.json({ message: "Favorites" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello Marvel" });
});

app.all("*", (req, res) => {
  res.json({ message: "Route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
