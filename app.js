const express = require("express");
const app = express();
const path = require("path");

app.listen(3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/ig/:username", (req, res) => {
  let data = require("./data.json");

  data = data[req.params.username];

  if (data) {
    res.render("insta", { data });
  } else {
    res.render("notFound");
  }
});
