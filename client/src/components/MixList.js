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
        <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
        <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
        <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
      </motion.ul>
    </AnimatePresence>
  );
}

export default MixList;