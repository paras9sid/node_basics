const path = require("path");

//handle creation of product
const express = require("express");

const router = express.Router();

// -- /admin/add-product -> GET req
router.get("/add-product", (req, res, next) => {
  //path used
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// -- /admin/add-product -> POST req
//methods are different paths are same so it differs
router.post("/add-product", (req, res, next) => {
  //for resolving error [Object: null prototype]  in console of req.body
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect("/");
});

module.exports = router;
