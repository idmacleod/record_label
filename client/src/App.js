import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Intro from './components/Intro';
import MixList from './components/MixList';
import NavBar from './components/NavBar';
import ReleaseList from './components/ReleaseList';
import Blog from './components/Blog';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      releases: [],
      editions: [],
      posts: [],
      tracks: [],
      showMixes: false
    }

    this.fetchData = this.fetchData.bind(this);
    this.toggleMixes = this.toggleMixes.bind(this);
  }

  fetchData() {
    const fetchArtists = fetch('http://localhost:8000/artists/')
      .then(res => res.json())
      .then(data => this.setState({artists: data.artists}))
      .catch(err => console.error(err));

    const fetchReleases = fetch('http://localhost:8000/releases/')
      .then(res => res.json())
      .then(data => this.setState({releases: data.releases}))
      .catch(err => console.error(err));

    const fetchEditions = fetch('http://localhost:8000/editions/')
      .then(res => res.json())
      .then(data => this.setState({editions: data.editions}))
      .catch(err => console.error(err));

    const fetchPosts = fetch('http://localhost:8000/posts/')
      .then(res => res.json())
      .then(data => this.setState({posts: data.posts}))
      .catch(err => console.error(err));
    
    const fetchTracks = fetch('http://localhost:8000/tracks/')
      .then(res => res.json())
      .then(data => this.setState({tracks: data.tracks}))
      .catch(err => console.error(err));

    return Promise.all([fetchArtists, fetchReleases, fetchEditions, fetchPosts, fetchTracks]);
  }

  componentDidMount() {
    this.fetchData();
  }

  toggleMixes() {
    this.setState({ showMixes: !this.state.showMixes });
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Router>
          <NavBar showMixes={this.state.showMixes} toggleMixes={this.toggleMixes}/>
          <div className="main">
            <Switch>
              <Route
                exact path = "/"
                render={() => <ReleaseList releases={this.state.releases}/>}
              />
              <Route
                exact path = "/blog"
                render={() => <Blog posts={this.state.posts}/>}
              />
            </Switch>
            <MixList showMixes={this.state.showMixes} tracks={this.state.tracks}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;