import React from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import "./Dashboard.css";
import { useContext } from "react";
import { UserContext } from "../authentication/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const catalog = user === null ? [] : user.catalog;
  return (
    <div className="dashboard">
      <div>
        <button className="addps">+ Add</button>
      </div>
      {catalog.map((product) => {
        return ProductItem(product);
      })}
    </div>
  );
};

export default Dashboard;
