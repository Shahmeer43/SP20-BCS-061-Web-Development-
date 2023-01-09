const mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
  title: String,
  price: Number,
  tags: [String],
});

const productsModel = mongoose.model("products", productsSchema);
module.exports = productsModel;
