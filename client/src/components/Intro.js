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
        <h1>tending the <span className="shadow">void</span></h1>
      </header>
      <img src={image1} id="img1" alt="" />
      <img src={image2} id="img2" alt="" />
      <img src={image3} id="img3" alt="" />
      <img src={image4} id="img4" alt="" />
      <div id="description">
        <p>A chance to dissolve old mortices,</p>
        <p>Deconstruct and rebuild forms.</p>
        <p>This universe is one of warping cadences and celestial melodies.</p>
        <p>Cosmic tones for mental therapy,</p>
        <p>Here is a new assemblage, collocation and collaboration,</p>
        <p>Exploring sounds and scenes of tomorrow’s unlocked vortices.</p>
      </div>
    </div>
  );
}

export default Intro;