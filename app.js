const path = require("path");

//package imports
const express = require("express");
const bodyParser = require("body-parser");

//file imports
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//setting global config values
app.set("view engine", "pug");
app.set("views", "views");

//registering the parser - add top before all the middlewares route
// extended false objetc remove warning - body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({ extended: false }));

//new middleware for accessing static files via express
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes); //routes with /admin in it only will go into adminRoutes - path filtered
app.use(shopRoutes);

//adding 404 error page for any route we cont have written
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found</h1>");
  //adding 404.html page
  res.status(404).sendFile(path.join(__dirname, "views", "404.html")); // no need to set ../ as we are in the same folder
});

app.listen(3000); //shortcut for server removing above 2 lines
