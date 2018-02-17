import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      showNewDiv: false
    }
    this.changeDiv= this.changeDiv.bind(this)
  }

  changeDiv (e) {
    console.log('click!')
    this.setState({
      showNewDiv: !this.state.showNewDiv
    })
  }

  render() {
      
    return (
      <div className="App">
        <Display
          changeDiv={this.changeDiv}
          showNewDiv={this.state.showNewDiv}
        />
      </div>
    );
  }
}

export default App;
