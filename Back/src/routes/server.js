// // const http = require("http");
// const PORT = 3001;
// // const characters = require("../utils/data");
// const { getCharById, getCharDetail } = require("../controllers/index");

// const express= require ("express")
// const app = express()

// //funcion error
// // function error(res) {
// //   res.writeHead(404, { "Content-Type": "text/plain" });
// //   res.end("Error!!, Route not found");
// // }
// function error(res){
//   res.status(404).json("Error!!!, ROute not found")
// }

// http
//   .createServer((req, res) => {
//     const allUrl = req.url.split("/");
//     //devuelve un array, el cual el ID es la ultima posicion
//     // console.log(allUrl)
//     const characterID = Number(allUrl.pop()); //entrega el ID
//     const url = allUrl.join("/");

//     switch (url) {
//       case "/onsearch":
//         return getCharById(res, characterID);
//       case "/detail":
//         return getCharDetail(res, characterID);
//       default:
//         error(res);
//     }
//   })
//   .listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
//   });

