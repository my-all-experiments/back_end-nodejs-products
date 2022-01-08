module.exports = (app) => {
  const products = require("../controller/product_controller");

  // Create a new product
  app.post("/products/add", products.add);

  // Retrieve all products
  app.post("/products", products.findAll);
};
