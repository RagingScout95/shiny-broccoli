import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  }, []);
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
    <>
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
          <section className="product-title">
            <h1>{productDetails.productname}</h1>
          </section>
          <section className="product-details">
            <h3>Rs.{productDetails.productprice}</h3>
            <h3>Color: {productDetails.productspecs.color}</h3>
            <h3>Brand: {productDetails.productspecs.brand}</h3>

            <section className="order-option">
              <div className="options">
                <Link>
                  <button>Buy Now</button>
                </Link>
                <Link>
                  <button>Add to Cart</button>
                </Link>
              </div>
            </section>
            <section className="specification">
              <table>
                <tbody>
                  <tr>
                    <td className="feild">brand</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">country of origin</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.countryoforigin}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">manufacturer</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">dimensions</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.dimensions.breadth}x
                      {productDetails.productspecs.dimensions.length}x
                      {productDetails.productspecs.dimensions.height}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">modelname</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.modelname}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">included components</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.includedcomponents}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">material</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.material}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">weight</td>
                    <td className="feild-ans">
                      {productDetails.productspecs.weight}
                    </td>
                  </tr>
                  <tr>
                    <td className="feild">category</td>
                    <td className="feild-ans">{productDetails.category}</td>
                  </tr>
                  <tr>
                    <td className="feild">description</td>
                    <td className="feild-ans">
                      {productDetails.productdescription}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
          <section className="product-description">
            <h2>Product Description</h2>
            <p>{productDetails.productdescription}</p>
          </section>
        </div>
      </div>
      <section className="reviews">{productDetails.reviews[0].review}</section>
    </>
  );
};

export default ProductPage;
