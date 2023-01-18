const express = require("express")
const router = express.Router()
const characters = require("./characters")

//modularizado de rutas
router.use("/rickandmorty",characters)

module.exports=router