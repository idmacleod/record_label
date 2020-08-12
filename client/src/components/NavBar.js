import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/releases">releases</Link></li>
      <li>~ / / / ~</li>
      <li><Link to="/artists">artists</Link></li>
    </ul>
  </nav>
);

export default NavBar;