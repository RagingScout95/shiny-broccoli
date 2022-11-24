import React from "react";
import "./CartItem.css";

const CartItem = (item) => {
  console.log(item);
  return (
    <div className="cart-item" key={item.cartproduct._id}>
      <div className="primg">
        <img src={item.cartproduct.productimages[0].imageurl} alt="images" />
      </div>
      <div className="prname">
        <h3>{item.cartproduct.productname}</h3>
      </div>
      <div className="prquant">
        <h4>{item.quantity}</h4>
      </div>
      <div className="prprice">
        <h4>{item.cartproduct.productprice}</h4>
      </div>
    </div>
  );
};

export default CartItem;
