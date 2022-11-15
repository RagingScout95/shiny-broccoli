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
            </Routes>
          </UserContext.Provider>
        </Router>
      }
    </div>
  );
}

export default App;
