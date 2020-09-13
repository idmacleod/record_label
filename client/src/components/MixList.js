import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

import MixTrack from './MixTrack';
import '../styles/MixList.css';

const variants = {
  open: { opacity: 1, width: "50%", padding: 10 },
  closed: { opacity: 0, width: 0, padding: 0 }
}

const MixList = ({showMixes}) => {
  return (
    <motion.ul
      className="mix-list"
      initial={ "closed" }
      animate={ showMixes ? "open" : "closed" }
      variants={variants}
    >
      <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
      <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
      <MixTrack track="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/760812571&color=%231a262c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false" />
    </motion.ul>
  );
}

export default MixList;