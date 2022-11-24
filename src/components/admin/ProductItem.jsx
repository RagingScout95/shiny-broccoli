import React from "react";
import "./ProductItem.css";

const ProductItem = (product) => {
  return (
    <div className="productitem" key={product._id}>
      <div className="pimage">
        <img className="pimg" src={product.productimages[0].imageurl} />
      </div>
      <div className="pname">
        <h1 className="pname-h1">{product.productname}</h1>
      </div>

      {/* <div className="pcategory">
        <h2 className="pname-h2">{product.category}</h2>
      </div> */}

      <div className="pprice">
        <h2 className="pname-h2">Rs {product.productprice}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
