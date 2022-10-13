import React from "react";
import "../../App.css";
import { Button } from "../navBar/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
