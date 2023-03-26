//handle creation of product
const express = require("express");

const router = express.Router();

// -- /admin/add-product -> GET req
router.get("/add-product", (req, res, next) => {
  console.log("In product middleware");
  // sending response  -- path is admin/add-product otherwise response send will throw error
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
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
