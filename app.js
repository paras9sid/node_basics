//package imports
const express = require("express");
const bodyParser = require("body-parser");

//file imports
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//registering the parser - add top before all the middlewares route
// extended false objetc remove warning - body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

//adding 404 error page for any route we cont have written
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000); //shortcut for server removing above 2 lines
