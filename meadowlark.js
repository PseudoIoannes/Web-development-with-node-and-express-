const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

const fortunes = ["conquer your fears", "Do not fear", "Keep it simple"];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  const randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomfortune });
});
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500);
  res.render("500");
});

app.listen(port, () => {
  console.log(`Express running server on ${port}`);
});
