const express = require("express")
const router = express.Router()
const {getCharacterId, getDetailID, getFavorite, postFavorite, deleteFavoriteId} = require("../controllers/index")


router.get("/character/:id", getCharacterId);
router.get("/detail/:detailId", getDetailID);
router.get("/fav", getFavorite);
router.post("/fav", postFavorite);
router.delete("/fav/:id", deleteFavoriteId);

module.exports = router;