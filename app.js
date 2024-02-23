const express = require("express");
const app = express();
const ejs = require("ejs");
const jsondata = require("./image.json");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index", {jsondata});
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
