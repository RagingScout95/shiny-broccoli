import "./App.css";
import React from "react";
import axios from "axios";
import Navbar from './components/navBar/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      {
        <Router>
          <Navbar />
          <Home/>
            <Routes>
              {/* <ProductPage />  */}
              <Route path="/" exact component={<Home />}/>
              {/* <Route path="/SignUp" exact component={Registeration}/> */}
            </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
