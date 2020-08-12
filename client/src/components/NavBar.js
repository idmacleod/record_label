import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/releases">Releases</Link></li>
      <li>~ / / / ~</li>
      <li><Link to="/artists">Artists</Link></li>
    </ul>
  </nav>
);

export default NavBar;