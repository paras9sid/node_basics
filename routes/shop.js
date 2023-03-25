const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("This always run home route");
  res.send("<h1>Response from the server!</h1>");
});

module.exports = router;
