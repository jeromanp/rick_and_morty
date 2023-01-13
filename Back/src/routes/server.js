let http = require("http");
const characters = require("../utils/data");
let PORT = 3001;
const { getCharById, getCharDetail } = require("../controllers/index");

//funcion error
function error(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Error, Route not found");
}

http
  .createServer((req, res) => {
    const allUrl = req.url.split("/");
    //devuelve un array, el cual el ID es la ultima posicion
    // console.log(allUrl)
    const characterID = Number(allUrl.pop()); //entrega el ID
    const url = allUrl.join("/");

    switch (url) {
      case "/onsearch":
        return getCharById(res, id);
      case "/detail":
        return getCharDetail(res, id);
      default:
        error(res);
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
