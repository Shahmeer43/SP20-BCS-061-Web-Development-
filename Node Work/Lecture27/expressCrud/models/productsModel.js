var mongoose = require("mongoose");
let productSchema = mongoose.Schema({
  name: String,
  price: String,
});

let products = mongoose.model("products", productSchema);
module.exports = products;
