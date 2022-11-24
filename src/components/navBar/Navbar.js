import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { UserContext } from "../authentication/UserContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BestMeds
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#about" className="nav-links">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
              </Link>
            </li>
          </ul>
          {user === null ? (
            <Link to="/login" className="btn-mobile">
              {" "}
              <Button buttonStyle="btn--outline">Login</Button>
            </Link>
          ) : (
            <div className="user-nav">
              <Link className="nav-user-links">{"Welcome, " + user.username}</Link>
              <Link to="/" className="btn-mobile" onClick={() => setUser(null)}>
                <Button buttonStyle="btn--outline">Logout</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
