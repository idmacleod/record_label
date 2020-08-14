import React from 'react';

import '../styles/ReleaseThumbnail.css';

const ReleaseThumbnail = ({release}) => {
  return (
    <li className="release-thumbnail">
      <img className="thumbnail" src={release.cover_art} alt="cover art" />
      <p>{release.name}</p>
    </li>
  );
}

export default ReleaseThumbnail;