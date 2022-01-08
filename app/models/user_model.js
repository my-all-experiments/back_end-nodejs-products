const eCommerce_DB = require("mongoose");

const user_schema = eCommerce_DB.Schema({
  full_name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = eCommerce_DB.model("users", user_schema);
