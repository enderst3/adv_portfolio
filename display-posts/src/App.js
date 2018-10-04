import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Redux Posts</h1>
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;
