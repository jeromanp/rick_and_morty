let http = require("http");
let fs = require("fs")

let PORT = 3001;

let servidor = http.createServer((req, res) => {
    console.log(`Servidor levantado en el puerto ${PORT}`)

    if(req.url === "rickandmorty/character"){
        fs.readFile(__dirname+"/Back/utils/data.js", "utf8", (error, data)=>{
            if(error){
                res.writeHead(404, {"Content-Type" : "text/plain"})
                res.end("Archivo json no encontrado")
            }else {
                // res.writeHead(200, {"Content-Type" : "application/json"})
                // res.end(data.id)
                const url=req.url.split("/")
                const characterID=url[url.length-1]
                const character = data.characters.find(char => char.id === characterID)
                if(character){
                    res.writeHead(200, {"Content-Type":"application/json"})
                    res.end(JSON.stringify(character))
                }
            }
        })
        return
    }
}).listen(PORT, "localhost");
