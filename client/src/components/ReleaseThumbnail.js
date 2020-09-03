import React from 'react';
import { motion } from 'framer-motion';

import '../styles/ReleaseThumbnail.css';

const ReleaseThumbnail = ({index, release, onSelect}) => {
  return (
    <motion.li className="release-thumbnail" onClick={() => onSelect(index)} whileHover={{ scale: 1.05 }}>
      <div className="left">
        <img className="thumbnail" src={release.cover_art} alt="cover art" />
        <p>{release.name}</p>
      </div>
      <div className="right">
        <p>~ ~ ~ {release.artist.name}</p>
      </div>
    </motion.li>
  );
}

export default ReleaseThumbnail;