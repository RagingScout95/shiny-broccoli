import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import "./Dashboard.css";
import { useContext } from "react";
import { UserContext } from "../authentication/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const catalog = user === null ? [] : user.catalog;
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
        <h1 className="box-b-h1">Your Products</h1>
        <hr></hr>
        {catalog.map((product) => {
          return ProductItem(product);
        })} 
      </div >

    </div>
  );
};

export default Dashboard;
