//! require express, & express-handlebars
var express = require("express");
var exphbs = require("express-handlebars");

//! import controller routes
var routes = require("./controllers/burgerController.js");

//! create server port
var PORT = process.env.PORT || 8080;

//! app setup
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});