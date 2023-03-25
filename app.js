//package imports
const express = require("express");

const app = express();

//use allows to add us new middleware function
//route added with app.use - handling routes
app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  // sending response
  res.send("<h1>Add product page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In another middleware");
  // sending response
  res.send("<h1>Response from the server!</h1>");
});

app.listen(3000); //shortcut for server removing above 2 lines
