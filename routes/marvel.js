// import packages
const express = require("express");
const router = express.Router();
const axios = require("axios");
const md5 = require("js-md5");
const uid2 = require("uid2");

// Marvel API requirements
const privateKey = process.env.MARVEL_SKEY;
const publicKey = process.env.MARVEL_PKEY;

// GET all characters
router.get("/characters", async (req, res) => {
  try {
    let timeStamp = uid2(8);
    let hash = md5(timeStamp + privateKey + publicKey);
    const page = req.query.page;
    const limit = 100;
    const offset = limit * (page - 1);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&orderBy=name&limit=${limit}&offset=${offset}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

// GET one character by ID
router.get("/characters/:id", async (req, res) => {
  try {
    let timeStamp = uid2(8);
    let hash = md5(timeStamp + privateKey + publicKey);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

// GET all comics
router.get("/comics", async (req, res) => {
  try {
    let timeStamp = uid2(8);
    let hash = md5(timeStamp + privateKey + publicKey);
    const page = req.query.page;
    const limit = 100;
    const offset = limit * (page - 1);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&orderBy=title&limit=${limit}&offset=${offset}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

// SEARCH for characters or comics
router.get("/search/:category/:search", async (req, res) => {
  try {
    let timeStamp = uid2(8);
    let hash = md5(timeStamp + privateKey + publicKey);
    const category = req.params.category;
    const search = req.params.search;
    const page = req.query.page;
    const limit = 100;
    const offset = limit * (page - 1);

    let response;
    if (category === "characters") {
      response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&orderBy=name&limit=${limit}&offset=${offset}&nameStartsWith=${search}`
      );
    } else {
      response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&orderBy=title&limit=${limit}&offset=${offset}&titleStartsWith=${search}`
      );
    }
    const results = response.data.data;
    res.json(results);
  } catch (error) {
    res.json(error.message);
  }
});

// GET favorites
router.post("/favorites", async (req, res) => {
  let timeStamp = uid2(8);
  let hash = md5(timeStamp + privateKey + publicKey);

  const fav = req.fields.fav;
  let favTab = [[], []];

  try {
    for (let i = 0; i < fav.length; i++) {
      if (i === 0) {
        for (let j = 0; j < fav[i].length; j++) {
          const response = await axios.get(
            `http://gateway.marvel.com/v1/public/characters/${fav[i][j]}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
          );
          favTab[0].push(response.data);
        }
      } else {
        for (let j = 0; j < fav[i].length; j++) {
          const response = await axios.get(
            `http://gateway.marvel.com/v1/public/comics/${fav[i][j]}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
          );
          favTab[1].push(response.data);
        }
      }
    }
    res.json(favTab);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
