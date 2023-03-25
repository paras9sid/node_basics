//package imports
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//registering the parser - add top before all the middlewares route
// extended false objetc remove warning - body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({ extended: false }));

//use allows to add us new middleware function
//route added with app.use - handling routes
app.use("/add-product", (req, res, next) => {
  console.log("In product middleware");
  // sending response
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});
//http requests - get post put patch delete
//app.get - filter for get requests & app.post - for incoming post request

app.post("/product", (req, res, next) => {
  console.log(req.body); //gives undefined ans in console
  res.redirect("/");
});

//home route / should be at the end so that other routes can be visited otherwise only home will visit again
app.use("/", (req, res, next) => {
  console.log("This always run home route");
  // sending response
  res.send("<h1>Response from the server!</h1>");
});

app.listen(3000); //shortcut for server removing above 2 lines
