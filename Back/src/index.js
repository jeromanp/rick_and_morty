const app = require("./app");

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log("server in http://localhost:3001");
});
