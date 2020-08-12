import React from 'react';

import '../styles/ReleaseDetails.css';

const ReleaseDetails = ({release}) => {
  return (
    <li className="release-details">
      <div className="grid-box">
        <img src={release.cover_art} alt="cover" />
      </div>
      <div className="grid-box">
        <ul>
          <li className="name">{release.name}</li>
          <li className="artist">{release.artist.name}</li>
          <li className="description">{release.description}</li>
        </ul>
      </div>
    </li>
  );
}

export default ReleaseDetails;