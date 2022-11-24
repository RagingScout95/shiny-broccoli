import React from "react";
import { useEffect } from "react";
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

  useEffect(() => {
    scrollFunction();
  }, [hash]);

  return (
    <div id="home">
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
      <div id="about">
        <div className="box">
          <h3>BESTMEDS</h3>
          <hr />
          <p className="para">This is BESTMEDS about us details.asdasdsaaaaaaaad sa das d as da s a a sa s s d fdsfasfas f as fas as f asf asf as f    asdfasd</p>
        </div>
        <div className="verticalLine"></div>
        <div className="box">
          <h3>Products</h3>
          <hr />
          <p className="para"><a href="/">best Equipment</a></p>
          <p className="para"><a href="/">Meds_1</a></p>
          <p className="para"><a href="/">Meds_2</a></p>
          <p className="para"><a href="/">Meds_3</a></p>
        </div>
        <div className="verticalLine"></div>
        <div className="box">
          <h3>Contact us</h3>
          <hr />
          <p className="para"><a href="/"><i className="fas fa-home mr-3"></i> Pune, Maharashtra</a></p>
          <p className="para"><a href="/"><i className="fas fa-envelope mr-3"></i> bestmeds_1900"gmail.com</a></p>
          <p className="para"><a href="/"><i className="fab fa-linkedin mr-3"></i> BESTMEDS</a></p>
          <p className="para"><a href="/"><i className="fab fa-youtube mr-3"></i> Sub To RagingScout95</a></p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
