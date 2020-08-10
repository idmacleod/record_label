import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Blog</Link></li>
      <li><Link to="/releases">Releases</Link></li>
      <li><Link to="/artists">Artists</Link></li>
    </ul>
  </nav>
);

export default NavBar;