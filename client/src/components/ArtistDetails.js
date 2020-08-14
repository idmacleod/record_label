import React from 'react';

import ReleaseThumbnail from './ReleaseThumbnail';
import '../styles/ArtistDetails.css';

const ArtistDetails = ({artist}) => {
  const releaseNodes = artist.releases.map((release, index) => {
    return <ReleaseThumbnail key={index} release={release} />
  });

  return (
    <div className="artist-details">
      <h3 className="name">{artist.name}</h3>
      <p className="description">{artist.description}</p>
      <ul className="releases">
          {releaseNodes}
      </ul>
    </div>
  );
}

export default ArtistDetails;