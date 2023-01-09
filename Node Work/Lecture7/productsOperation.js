const productsModel = require("./model/productsModel");
const createProduct = async (title, price, tags) => {
  console.log("creating products....");
  let product = new productsModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  let product = await productsModel.find();
  return product;
};

const getProductsById = async (id) => {
  let productId = await productsModel.findById(id);
  return productId;
};

const productsDelete = async (id) => {
  let productDeleteId = await productsModel.findByIdAndDelete(id);
  return productDeleteId;
};

const updateProducts = async (id, title, price, tags) => {
  let product = await productsModel.findById(id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.getProductsById = getProductsById;
module.exports.productsDelete = productsDelete;
module.exports.updateProducts = updateProducts;
