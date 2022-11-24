import React from "react";
import "./orders.css";

const orderItems = (order) => {
  return (
    <div className="productitem" key={order._id}>
      <div className="orderitemes">
        <h2 className="pname-h1">{order.product.productname}</h2>
      </div>
    </div>
  );
};

export default orderItems;
