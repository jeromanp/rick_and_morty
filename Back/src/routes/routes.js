// const express = require("express")
const {Router}= require("express")
const rickRoutes = require("./rickRoutes")

const mainRoutes = Router()

//modularizado de rutas
mainRoutes.use("/rickandmorty",rickRoutes)

module.exports=mainRoutes