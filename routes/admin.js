const path = require("path");

//handle creation of product
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// -- /admin/add-product -> GET req
router.get("/add-product", (req, res, next) => {
  //path used
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// -- /admin/add-product -> POST req
//methods are different paths are same so it differs
router.post("/add-product", (req, res, next) => {
  //for resolving error [Object: null prototype]  in console of req.body
  const obj = JSON.parse(JSON.stringify(req.body));
  // console.log(obj);
  products.push({ title: obj.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
