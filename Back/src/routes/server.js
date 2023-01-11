let http = require("http");
const characters = require("../utils/data");
let PORT = 3001;

function error(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Error");
}

http
  .createServer((req, res) => {
    const allUrl = req.url.split("/");
    //devuelve un array, el cual el ID es la ultima posicion
    // console.log(allUrl)
    const characterID = Number(allUrl.pop()); //entrega el ID
    const url = allUrl.join("/");

    if (url === "/rickandmorty/character") {
      const character = characters.find((ch) => {
        return ch.id === characterID;
      });

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        error(res);
      }
    } else if (req.url === "/rickandmorty/characters") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(characters));
    } else {
      error(res);
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });


