const axios = require("axios");

//array para BD
let favorites = [];

const getCharacterId = (req, res) => {
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("character not found");
    });
};

const getDetailID = (res, res) => {
  const { detailId } = req.params;

  axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
        stats: data.status,
        origin: data.origin,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("not found character");
    });
};

const getFavorite = function (req, res) {
  res.status(200).end(JSON.stringify(favorites));
};

const postFavorite = function (req, res) {
  favorites.push(req.body);
  // console.log("post fav ==>", favorites);
  res.status(200).end(JSON.stringify(req.body));
};

const deleteFavoriteId = function (req, res) {
  const { id } = req.params;
  const character = favorites.find((char) => char.id === Number(id));
  if (character) {
    favorites=favorites.filter((char)=> char.id !== Number(id))
    console.log("delete fav ==>", favorites);
    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("this character is not in Favorites");
  }
};

module.exports = {
  getCharacterId,
  getDetailID,
  getFavorite,
  postFavorite,
  deleteFavoriteId,
};
