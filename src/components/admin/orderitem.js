import React from "react";
import "./orders.css";

const orderItems = (order) => {
  return (
    <div className="productitem" key={order._id}>
      <div className="orderitemes">
        <h2 className="pname-h1">{order.OrderNumber}</h2>
      </div>
      <div className="orderitemes">
        <h2 className="pname-h1">{order.Status}</h2>
      </div>
      <div className="orderitemes">
        <h2 className="pname-h1">{order.Location}</h2>
      </div>
      <div className="orderitemes">
        <h2 className="pname-h1">{order.OrderDate}</h2>
      </div>
    </div>
  );
};

export default orderItems;
