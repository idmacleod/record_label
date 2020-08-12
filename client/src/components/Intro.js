import React from 'react';
import '../styles/Intro.css';
import image1 from '../images/FIREC014LP_BAG.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <header id="title">
        <h1>tending the void</h1>
      </header>
      <img src={image1} id="img1" alt="" />
      <img src={image1} id="img2" alt="" />
      <img src={image1} id="img3" alt="" />
      <p id="description">Edinburgh based label specialising in oddball house, techno and electronics. Collectable editions made by hand since 2004.</p>
    </div>
  );
}

export default Intro;