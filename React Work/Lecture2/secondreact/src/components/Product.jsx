import React from "react";
import "./Product.css";

const Product = ({ title, price, onAddToCart, count }) => {
  let priceClass = price <= 500 ? "orange" : "green";

  return (
    <div>
      <h1 className="product">{title}</h1>
      <p className={priceClass}>
        <b>price:</b> {price}
      </p>{" "}
      <div>{count}</div>
      <button
        onClick={() => {
          onAddToCart(title);
        }}
      >
        Add to Cart
      </button>
      <hr></hr>
    </div>
  );
};

export default Product;
