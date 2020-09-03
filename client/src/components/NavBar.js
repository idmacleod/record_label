import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => (
  <nav>
    <ul>
      <motion.li whileHover={{ scale: 1.05 }}><Link to="/">releases</Link></motion.li>
      <li>~ / ~ / ~ / ~</li>
      <motion.li whileHover={{ scale: 1.05 }}><Link to="/blog">blog</Link></motion.li>
      <li>~ \ ~ \ ~ \ ~</li>
      <motion.li whileHover={{ scale: 1.05 }}><Link to="/">mixes</Link></motion.li>
    </ul>
  </nav>
);

export default NavBar;