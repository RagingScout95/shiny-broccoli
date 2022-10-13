import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import { Button } from "../navBar/Button";
import "./HeroSection.css";

function HeroSection() {
  const { hash } = useLocation();
  function scrollFunction() {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));

      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    }
  }

  return (
    <div id="home" onLoad={scrollFunction()}>
      <div className="hero-container">
        <h1>BESTMEDS AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Products
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            // onClick={console.log('hey')}
          >
            Equipment
          </Button>
        </div>
      </div>
      {/* <div id="gaap"></div> */}
      <div id="about"></div>
    </div>
  );
}

export default HeroSection;
