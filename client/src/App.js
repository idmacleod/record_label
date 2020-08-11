import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Blog from './components/Blog';
import ReleaseList from './components/ReleaseList';
import ArtistList from './components/ArtistList';
import './styles/App.css';

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

    return Promise.all([fetchArtists, fetchReleases, fetchEditions, fetchPosts])
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <NavBar />
            <Switch>
              <Route
                exact path = "/"
                render={() => <Blog posts={this.state.posts}/>}
              />
              <Route
                exact path = "/releases"
                render={() => <ReleaseList releases={this.state.releases}/>}
              />
              <Route
                exact path = "/artists"
                render={() => <ArtistList artists={this.state.artists}/>}
              />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;