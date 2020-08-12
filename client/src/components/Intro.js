import React from 'react';

import '../styles/Intro.css';
import image1 from '../images/COIL_etch_reference_ALT.jpg'
import image2 from '../images/Black.jpg';
import image3 from '../images/FIREC014LP_BAG.jpg';
import image4 from '../images/AMY_FIREC025 (1).jpg';

const Intro = () => {
  return (
    <div className="intro">
      <header id="title">
        <h1>tending the void</h1>
      </header>
      <img src={image1} id="img1" alt="" />
      <img src={image2} id="img2" alt="" />
      <img src={image3} id="img3" alt="" />
      <img src={image4} id="img4" alt="" />
      <p id="description">Edinburgh based label specialising in oddball house, techno and electronics. Collectable editions made by hand since 2004.</p>
    </div>
  );
}

export default Intro;