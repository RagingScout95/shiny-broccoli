import React from "react";
import "./ProductPage.css";
const ProductPage = (props) => {
  return (
    <div className="product-page">
      <div className="product-image-container"></div>
      <div className="product-details-container">
        <section className="product-title"></section>
        <section className="product-details"></section>
        <section className="product-description"></section>
      </div>
    </div>
  );
};

export default ProductPage;
