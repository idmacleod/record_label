import React from 'react';
import ReleaseDetail from './ReleaseDetails'

const ReleaseList = props => {
  const releaseNodes = props.releases.map(release => {
    return <ReleaseDetail release={release} />;
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