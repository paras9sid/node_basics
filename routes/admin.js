const path = require("path");

//handle creation of product
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// -- /admin/add-product -> GET req
router.get("/add-product", productsController.getAddProduct);

// -- /admin/add-product -> POST req
//methods are different paths are same so it differs
router.post("/add-product", productsController.postAddProduct);

// module.exports = router;
module.exports = router;
