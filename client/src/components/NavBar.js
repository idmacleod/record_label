import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => (
  <div className="nav-bar">
    <nav>
      <ul className="links">
        <li><Link to="/releases">Releases</Link></li>
        <li><Link to="/artists">Artists</Link></li>
      </ul>
    </nav>
  </div>
);

export default NavBar;