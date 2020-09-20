import React from 'react';

import '../styles/MixTrack.css';

const MixTrack = ({track}) => {
  return (
    <div className="mix-track">
      <iframe title={track.audio} src={track.audio} seamless></iframe>
    </div>
  );
}

export default MixTrack;