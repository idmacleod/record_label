import React from 'react';
import '../styles/Intro.css';
import image1 from '../images/FIREC014LP_BAG.jpg';

const Intro = () => {
    return (
        <div className="intro">
            <header>
                <h1>tending the void</h1>
                <img src={image1} alt=""/>
                <img src={image1} alt=""/>
            </header>
            <p>Edinburgh based label specialising in oddball house, techno and electronics. Collectable editions made by hand since 2004.</p>
        </div>
    );
}

export default Intro;