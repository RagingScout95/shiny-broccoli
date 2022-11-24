import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/productpage/ProductPage.jsx";

import Navbar from "./components/navBar/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/authentication/signup";
import Login from "./components/authentication/login";
import Cards from "./components/cards/Cards";
import Dashboard from "./components/admin/Dashboard";
import { UserContext } from "./components/authentication/UserContext";
import Adminlogin from "./components/adminauth/Adminlogin";
import Adminsignup from "./components/adminauth/Adminsignup";
import Cart from "./components/cart/Cart";
import ConfirmOrder from "./components/cart/ConfirmOrder";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {
        <Router>
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:product" element={<ProductPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Cards />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/adminsignup" element={<Adminsignup />} />
              <Route path="/adminlogin" element={<Adminlogin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirmorder" element={<ConfirmOrder />} />
            </Routes>
          </UserContext.Provider>
        </Router>
      }
    </div>
  );
}

export default App;
