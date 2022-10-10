import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/productpage/ProductPage.jsx";

import Navbar from "./components/navBar/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/authentication/signup";
import Login from "./components/authentication/login";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:product" element={<ProductPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Cards />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
