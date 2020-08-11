import React from 'react';
import ReleaseDetails from './ReleaseDetails'

const ReleaseList = props => {
  const releaseNodes = props.releases.map((release, index) => {
    return <ReleaseDetails key={index} release={release} />;
  })

  return (
    <div className="release-list">
      <ul>
        {releaseNodes}
      </ul>
    </div>
  );
}

export default ReleaseList;