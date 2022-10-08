import "./App.css";
import React from "react";
import axios from "axios";
import ProductPage from "./components/productpage/ProductPage";

function App() {
  const getAllUsers = async () => {
    const allusers = await axios
      .get("http://localhost:5000/ecommerce/api/v1/allusers")
      .then((response) => {
        console.log(response);
      });
  };
  // getAllUsers();
  return (
    <div className="App">
      <ProductPage />
    </div>
  );
}

export default App;
