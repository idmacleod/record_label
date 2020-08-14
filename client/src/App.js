import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Intro from './components/Intro'
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import ReleaseList from './components/ReleaseList';
import ArtistList from './components/ArtistList';
import image from './images/Les PRINT3.jpg'
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
        <div className="left">
          <Intro />
          <Blog posts={this.state.posts}/>
        </div>
        <div className="right">
          <Router>
            <NavBar />
            <Switch>
              <Route
                exact path = "/"
                render={() => <img id="main-image" src={image} alt="" />}
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
        </div>
      </div>
    );
  }
}

export default App;