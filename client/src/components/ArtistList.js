import React from 'react';
import ArtistDetails from './ArtistDetails'

const ArtistList = props => {
  const artistNodes = props.artists.map((artist, index) => {
    return <ArtistDetails key={index} artist={artist} />;
  })

  return (
    <div className="artist-list">
      <ul>
        {artistNodes}
      </ul>
    </div>
  );
}

export default ArtistList;