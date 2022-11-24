import React from "react";
import { Link } from "react-router-dom";
import "./orders.css";
import { UserContext } from "../authentication/UserContext";
import orderItems from "./orderitem";

const Dashboard = () => {
  const { user, setUser } = React.useContext(UserContext);
  const orders = user === null ? [] : user.orders;
  return (
    <div className="dashboard">
      <div className="box-a">
        <h1 className="ad">Admin Dashboard</h1>    

        <div className="box-1">
          <p className="dashNavItem">
            <Link to="/admin" className="dashNavLinks">Catalog</Link>
          </p>  
          <p className="dashNavItem">
            <Link to="/orders" className="dashNavLinks">Orders</Link>
          </p>
          <p className="dashNavItem">
            <Link to="/addproduct" className="dashNavLinks">Add Products</Link>
          </p>       
        </div> 
      </div>
        
      <div className="box-b">
        <h1 className="box-b-h1">Orders</h1>
        <hr></hr>
        {orders.map((order) => {
          return orderItems(order);
        })} 
      </div >

    </div>
  );
};

export default Dashboard;
