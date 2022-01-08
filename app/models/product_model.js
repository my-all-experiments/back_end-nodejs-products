const eCommerce_DB = require("mongoose");

const product_schema = eCommerce_DB.Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  user_id: {
    type: String,
    require: true,
  }
});

module.exports = eCommerce_DB.model("products", product_schema);
