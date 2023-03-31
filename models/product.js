// const products = [];

const fs = require("fs");
const path = require("path");
const Cart = require("./cart");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    //     if (err) {
    //       return cb([]);
    //     }
    //     cb(JSON.parse(fileContent));
    //   });
    //if-else used for above code
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

//product details model
module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  //saving above product info
  save() {
    getProductsFromFile((products) => {
      //if id exists
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        //assigning id for the product unique id
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
    // products.push(this);
  }

  static deleteById(id) {
    //removing product - which one
    getProductsFromFile((products) => {
      //extract product before removing
      const product = products.find((prod) => prod.id === id);
      const updatedProducts = products.filter((prod) => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  //fetching all product details
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  //fetching product by id
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
