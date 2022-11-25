import React from "react";
import "./orders.css";

const orderItems = (order) => {
  return (
    <div className="ordersmain" key={order._id}>
      <div className="box_orders-1">
        <div className="orderitemes-1">
          <img className="pimg" src={order.product.productimages[0].imageurl} />
        </div>
      </div>
      <div className="box_orders-2">
        <div className="orderitemes">
          <h2 className="pname-h1">{order.product.productname}</h2>
          {console.log(order.delivered)}
        </div>
      </div> 
      <div className="box_orders">
        <div className="orderitemes">
          <h2 className="pname-h1">{order.user.username}</h2>
        </div>
      </div>  

      <div className="box_orders">
        <div className="orderitemes">
          <h2 className="pname-h1">{order.shipped?("Yes"):("No")}</h2>
        </div>
      </div>
      <div className="box_orders">
        <div className="orderitemes">
          <h2 className="pname-h1">{order.delivered?("Delivered"):("Pending")}</h2>
        </div>
      </div>
      <div className="box_orders">
        <div className="orderitemes">
          <h2 className="pname-h1">{order.paid?("Paid"):("COD")}</h2>
        </div>
      </div>
    </div>
  );
};

export default orderItems;
