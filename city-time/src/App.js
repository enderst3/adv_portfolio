import React, { Component } from 'react';
import './App.css';

const data = [
  {name: 'Portland', offset: 7},
  {name: 'Miami', offset: 4}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">City Time</h1>
        </header>
        <div>
          <div>
            <CityList
              data={this.props.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const CityList = (props) => {
  const cityData = data.map((item) => {
    return (
      <CityListItem
        key={item.name}
        item={item}
      />
    )
  })
  return (
    <div>
      {cityData}
    </div>
  )
}

const CityListItem = (props) => {
  return (
    <div
      key={props.item.city}
    >
      <p>{props.item.name}: {props.item.offset}</p>
    </div>
  )
}
