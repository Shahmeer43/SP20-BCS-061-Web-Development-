console.clear();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  getProductsById,
  productsDelete,
  updateProducts,
} = require("./productsOperation");

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/mernstack")
  .then(async () => {
    // console.log("connected to mongo");
    // let newproduct = await createProduct("Dell", 200, ["funny", "classy"]);
    // console.log(newproduct);
    let allProducts = await getAllProducts();
    console.log(allProducts);
    // let productId = await getProductsById("639c1d0a3ba78128fbeb41c2");
    // console.log(productId);
    // let deleteProductId = await productsDelete("639c46dcb4499e2346695452");
    // console.log(deleteProductId);

    // let updatedProduct = await updateProducts(
    //   "639c1d0a3ba78128fbeb41c2",
    //   "Samsung",
    //   900,
    //   ["stylish", "golden"]
    // );
    // console.log(updatedProduct);
  })
  .catch(() => {
    console.log("connecting,wait");
  });
