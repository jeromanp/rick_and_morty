const axios = require("axios");

//array para BD
let favorites = [];

const getCharacterId = async (req, res) => {
  const { id } = req.params;
  try {
    const getChar = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    // console.log(getChar);
    const result = getChar.data
    const character = {
      id: result.id,
      name: result.name,
      gender: result.gender,
      species: result.species,
      image: result.image,
    };
    // console.log(character);
    res.status(200).json(character)
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("character not found", error);
  }
};

const getDetailID = async (req, res) => {
  const { detailId } = req.params;

  try {
    const getDetail = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const character = {
      id: getDetail.id,
      name: getDetail.name,
      gender: getDetail.gender,
      species: getDetail.species,
      image: getDetail.image,
      stats: getDetail.status,
      origin: getDetail.origin,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("not found character", error);
  }
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
    favorites = favorites.filter((char) => char.id !== Number(id));
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
