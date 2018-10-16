import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'

import Posts from './components/Posts'
import PostForm from './components/PostForm'



const store = createStore(() => [], {}, applyMiddleware)

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <div className="App">
          <header className="App-header">
            <h1>Redux Posts</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
