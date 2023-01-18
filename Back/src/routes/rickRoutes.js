// const express = require("express")
const { Router } = require("express");
const {
  getCharacterId,
  getDetailID,
  getFavorite,
  postFavorite,
  deleteFavoriteId,
} = require("../controllers/functions-rickRoutes");

const rickRoutes = Router()

rickRoutes.get("/character/:id", getCharacterId);
rickRoutes.get("/detail/:detailId", getDetailID);
rickRoutes.get("/fav", getFavorite);
rickRoutes.post("/fav", postFavorite);
rickRoutes.delete("/fav/:id", deleteFavoriteId);

module.exports = rickRoutes;
