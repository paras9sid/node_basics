// product related logic in this file

const products = [];

exports.getAddProduct = (req, res, next) => {
  //path used
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  //for resolving error [Object: null prototype]  in console of req.body
  const obj = JSON.parse(JSON.stringify(req.body));
  products.push({ title: obj.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};


