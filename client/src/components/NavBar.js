import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">releases</Link></li>
      <li>~ / ~ / ~ / ~</li>
      <li><Link to="/blog">blog</Link></li>
      <li>~ \ ~ \ ~ \ ~</li>
      <li><Link to="/mixes">mixes</Link></li>
    </ul>
  </nav>
);

export default NavBar;