import React from 'react';
import '../../App.css';
import Cards from '../cards/Cards';
import HeroSection from '../heroSection/HeroSection.js';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
