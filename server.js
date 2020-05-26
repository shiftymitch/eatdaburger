var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgerController.js");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});