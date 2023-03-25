//handle creation of product
const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In product middleware");
  // sending response
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  //for resolving error [Object: null prototype]  in console of req.body
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect("/");
});

module.exports = router;
