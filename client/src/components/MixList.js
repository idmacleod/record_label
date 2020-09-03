import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

import MixTrack from './MixTrack';
import '../styles/MixList.css';

const MixList = () => {
  return (
    <AnimatePresence initial={false}>
      <motion.ul
        className="mix-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <MixTrack track="https://bandcamp.com/EmbeddedPlayer/album=1892030037/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" />
        <MixTrack track="https://bandcamp.com/EmbeddedPlayer/album=1892030037/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" />
        <MixTrack track="https://bandcamp.com/EmbeddedPlayer/album=1892030037/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" />
      </motion.ul>
    </AnimatePresence>
  );
}

export default MixList;