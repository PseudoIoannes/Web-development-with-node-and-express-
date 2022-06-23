const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

const handlers = require("./lib/handlers");

// const fortune = require("./lib/fortune");

app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

app.get("/", handlers.home);

app.get("/about", handlers.about);
app.use(handlers.notFound);

app.use(handlers.serverError);

app.listen(port, () => {
  console.log(`Express running server on ${port}`);
});
