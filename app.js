//package imports
// const http = require("http");

const express = require("express");

const app = express();

//use allows to add us new middleware function
app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // allows the request to continue to next middleware in line
});
app.use((req, res, next) => {
  console.log("In another middleware");

  // sending response
  res.send("<h1>Response from the server!</h1>");
});

// const server = http.createServer(app); // as handler has requesthandler funciton assigned to it.

// server.listen(3000);

app.listen(3000); //shortcut for server removing above 2 lines
