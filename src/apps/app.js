const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
})

app.listen(port = 3000, (req, res) => {
  console.log("Server listening on " + port);
})