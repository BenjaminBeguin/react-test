import React, { Component } from 'react';

//components
// import Header from './components/header/index';
// import Products from './components/products/';
import Spotify from './components/spotify/spotify';

// style
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Spotify />
      </div>
    );
  }
}

export default App;
