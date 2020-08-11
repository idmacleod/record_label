import React from 'react';

const ReleaseDetails = ({release}) => {
  return (
    <li>{release.long_name}</li>
  );
}

export default ReleaseDetails;