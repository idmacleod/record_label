import React from 'react';

import '../styles/ReleaseDetails.css';

const ReleaseDetails = ({release}) => {
  return (
    <div className="release-details">
      <div className="grid-box">
        <img src={release.cover_art} alt="cover" />
      </div>
      <div className="grid-box">
        <h3 className="name">{release.name}</h3>
        <ul>
          <li className="artist">{release.artist.name}</li>
          <li className="description">{release.description}</li>
        </ul>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1285742574/size=small/bgcol=333333/linkcol=ffffff/artwork=none/track=671030091/transparent=true/" seamless></iframe>
      </div>
    </div>
  );
}

export default ReleaseDetails;