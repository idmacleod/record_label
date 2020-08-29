import React from 'react';

import ReleaseDetails from './ReleaseDetails'
import ReleaseThumbnail from './ReleaseThumbnail';

class ReleaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    this.setState({selected: index});
  }

  render() {
    const releaseNodes = this.props.releases.map((release, index) => {
      if (index === this.state.selected) {
        return <ReleaseDetails key={index} release={release} />;
      } else {
        return (
          <ReleaseThumbnail
            key={index}
            index={index}
            release={release}
            onSelect={this.handleSelect}
          />
        );
      }
    });

    return (
      <div className="release-list">
        <ul>
          {releaseNodes}
        </ul>
      </div>
    );
  }
}

export default ReleaseList;