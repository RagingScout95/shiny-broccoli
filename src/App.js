import "./App.css";
import React from "react";
import Navbar from "./components/navBar/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/productpage/ProductPage.jsx";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:product" element={<ProductPage />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
