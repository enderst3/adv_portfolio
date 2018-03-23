import React, { Component } from 'react';
import './App.css';

const data = [
  {name: 'Portland', offset: 7},
  {name: 'Miami', offset: 4},
  {name: 'Denver', offset: 6}
]


export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCity: null,
      selectedOffset: null,
      currentUTC: null
    }
    this.chosenCity = this.chosenCity.bind(this)
  }

  chosenCity (item) {
    console.log(item.name)
    let now = new Date()
    this.setState({
      selectedCity: item.name,
      selectedOffset: item.offset,
      currentUTC: now.toUTCString(item.offset)
    })
  }

  render() {
    if (this.state.selectedCity || this.state.selectedOffset) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">City Time</h1>
          </header>
          <div>
            <div>
              <CityList
                data={this.props.data}
                chosenCity={this.chosenCity}
              />
            </div>
            <div>
              <p>The Current time in {this.state.selectedCity} is:</p>
              <p>{this.state.currentUTC} - {this.state.selectedOffset} hours</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">City Time</h1>
        </header>
        <div>
          <div>
            <CityList
              data={this.props.data}
              chosenCity={this.chosenCity}
            />
          </div>
        </div>
      </div>
    )
  }
}


const CityList = (props) => {
  const cityData = data.map((item) => {
    return (
      <CityListItem
        key={item.name}
        item={item}
        chosenCity={props.chosenCity}

      />
    )
  })
  return (
    <div>
      {cityData}
    </div>
  )
}


class CityListItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.chosenCity(this.props.item)
  }

  render () {
    return (
      <div
        key={this.props.item.name}
        onClick={this.handleClick}
        value={this.props.item.name}
      >
        <p>{this.props.item.name}: {this.props.item.offset}</p>
      </div>
    )
  }
}
