const path = require("path");

//package imports
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//ejs engine using now
app.set("view engine", "ejs"); //pug changed to handlebars
app.set("views", "views");

//file imports
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

//registering the parser - add top before all the middlewares route
// extended false objetc remove warning - body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({ extended: false }));

//new middleware for accessing static files via express
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); //routes with /admin in it only will go into adminRoutes - path filtered
app.use(shopRoutes);

//adding 404 error page for any route we cont have written
app.use(errorController.get404);

app.listen(3000); //shortcut for server removing above 2 lines
