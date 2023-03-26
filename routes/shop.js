const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // __dirname points to path in the same foler t, so to go up add one more  '../' like this to go up on level
  res.sendFile(path.join(rootDir, "views", "shop.html")); //dont add / in path anywhere as join is used
});

module.exports = router;
