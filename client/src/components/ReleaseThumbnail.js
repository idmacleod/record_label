import React from 'react';

import '../styles/ReleaseThumbnail.css';

const ReleaseThumbnail = ({index, release, onSelect}) => {
  return (
    <li className="release-thumbnail" onClick={() => onSelect(index)}>
      <img className="thumbnail" src={release.cover_art} alt="cover art" />
      <p>{release.name}</p>
    </li>
  );
}

export default ReleaseThumbnail;