import React from 'react';

import '../styles/ReleaseThumbnail.css';

const ReleaseThumbnail = ({index, release, onSelect}) => {
  return (
    <li className="release-thumbnail" onClick={() => onSelect(index)}>
      <div className="left">
        <img className="thumbnail" src={release.cover_art} alt="cover art" />
        <p>{release.name}</p>
      </div>
      <div className="right">
        <p>~ ~ ~ {release.artist.name}</p>
      </div>
    </li>
  );
}

export default ReleaseThumbnail;