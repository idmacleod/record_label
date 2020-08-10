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
    fetch('http://localhost:8000/artists/')
      .then(res => res.json())
      .then(data => this.setState({artists: data}));
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
