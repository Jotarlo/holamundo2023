const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hola Mundo a todos... 2023");
});

app.get("/hola", function (req, res) {
  res.send("Hola hola");
});

app.listen(port);
console.log("Listening in port " + port);
