import React from 'react';

import '../styles/MixTrack.css';

const MixTrack = ({track}) => {
  return (
    <div className="mix-track">
      <iframe src={track} seamless></iframe>
    </div>
  );
}

export default MixTrack;