import React from "react";
import "./ProductItem.css";

const ProductItem = (product) => {
  return (
    <div className="productitem" key={product._id}>
      <div className="pname">
        <h1>{product.productname}</h1>
      </div>
      <div className="pprice">
        <h2>{product.productprice}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
