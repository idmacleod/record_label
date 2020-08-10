import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      releases: [],
      editions: [],
      posts: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const fetchArtists = fetch('http://localhost:8000/artists/')
      .then(res => res.json())
      .then(data => this.setState({artists: data}))
      .catch(err => console.error(err));

    const fetchReleases = fetch('http://localhost:8000/releases/')
      .then(res => res.json())
      .then(data => this.setState({releases: data}))
      .catch(err => console.error(err));

    const fetchEditions = fetch('http://localhost:8000/editions/')
      .then(res => res.json())
      .then(data => this.setState({editions: data}))
      .catch(err => console.error(err));

    const fetchPosts = fetch('http://localhost:8000/posts/')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
      .catch(err => console.error(err));

    return Promise.all([fetchArtists, fetchReleases, fetchEditions, fetchPosts])
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Record Label</h1>
        </header>
      </div>
    );
  }
}

export default App;
