import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const url = "http://localhost:5000/ecommerce/api/v1/";
  const [productDetails, setProductDetails] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const { product } = useParams();
  async function getProduct() {
    await axios
      .get(`${url + product}`)
      .then((response) => {
        setMainImage((previmg) => response.data.productimages[0].imageurl);
        setProductDetails((prevdetails) => response.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProduct();
  }, [product]);
  if (!productDetails) return null;

  const handleOnclick = (e) => {
    const imageElement = e.target;
    const imagesrc = imageElement.getAttribute("src");
    console.log(imageElement);
    setMainImage((previmg) => {
      return imagesrc;
    });
  };

  return (
    <div className="product-page">
      <div className="product-image-container">
        <div className="image-slider">
          {productDetails.productimages.map((image) => {
            return (
              <div
                key={image._id}
                className="image-slider-box"
                onClick={handleOnclick}
              >
                <img src={image.imageurl} alt="images" />
              </div>
            );
          })}
        </div>
        <div className="image-box">
          <img src={mainImage} alt="" />
        </div>
      </div>
      <div className="product-details-container">
        <section className="product-title"></section>
        <section className="product-details"></section>
        <section className="product-description"></section>
      </div>
    </div>
  );
};

export default ProductPage;
