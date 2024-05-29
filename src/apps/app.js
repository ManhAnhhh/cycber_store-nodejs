const express = require("express");
const config = require("config");
const app = express();

// config file tĩnh
app.use("/static", express.static(config.get("app.static_folder")));

// Set EJS as templating engine 
app.set('views', config.get("app.views_folder"))
app.set('view engine', config.get("app.view_engine"));

app.get("/", (req, res) => {
  res.render('site/home.ejs');
});

module.exports = app;
