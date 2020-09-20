import React from 'react';
import { motion } from "framer-motion";

import MixTrack from './MixTrack';
import '../styles/MixList.css';

const variants = {
  open: { opacity: 1, width: "50%", padding: 10 },
  closed: { opacity: 0, width: 0, padding: 0 }
}

const MixList = ({showMixes, tracks}) => {
  const trackNodes = tracks.map((track, index) => {
    return <MixTrack key={index} track={track} />;
  })

  return (
    <motion.ul
      className="mix-list"
      initial={ "closed" }
      animate={ showMixes ? "open" : "closed" }
      variants={variants}
    >
      {trackNodes}
    </motion.ul>
  );
}

export default MixList;