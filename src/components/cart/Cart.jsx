import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../authentication/UserContext";
import CartItem from "./CartItem";
import "./Cart.css";
import ConfirmOrder from "./ConfirmOrder";
import axios from "axios";
const Cart = () => {
  const url = "http://localhost:5000/ecommerce/api/v1/";
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  let totalprice = 0;
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);
  if (!user) return null;
  const cart = user.cart;

  const placeOrder = () => {
    user.cart.map(async (item) => {
      const productownerid = item.cartproduct.productowner;
      const productid = item.cartproduct._id;
      const userid = user._id;
      await axios.post(
        `${url +
          "placeorder/" +
          userid +
          "/" +
          productownerid +
          "/" +
          productid}`
      );
      navigate("/confirmorder");
    });
  };

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Products Cart</h1>
      </div>
      <div className="cart-list">
        <div className="headings">
          <div className="prodname">
            <h3>Products</h3>
          </div>
          <div className="prodprice">
            <div className="cart-quant">
              <h3>Quantity</h3>
            </div>
            <h3>Prices</h3>
          </div>
        </div>
        <div className="list">
          {cart.map((item) => {
            totalprice += item.cartproduct.productprice * item.quantity;
            return CartItem(item);
          })}
        </div>
      </div>
      <div className="cart-total">
        <div className="total-title">
          <h4>Total</h4>
        </div>
        <div className="total price">
          <h3>{totalprice}</h3>
        </div>
      </div>
      <div className="placeorder">
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
