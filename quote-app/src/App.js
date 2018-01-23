import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import './App.css';


const url = "https://talaikis.com/api/quotes/random/"
// const url = "http://quotes.rest/qod.json"
// const url = ''

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newQuote: [],
      searchTerm: ''
    }

    this.onSearchTermInput = this.onSearchTermInput.bind(this)
  }

  onSearchTermInput (e) {
    this.setState({searchTerm: e.target.value})
  }

  componentWillMount () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(json => {
        this.setState({newQuote: json})
        // console.log('parsed json', json)
        console.log(this.state)
      }).catch((err) => {
        console.log('parsing failed', err)
      })
  }

  render() {
    return (
      <div className="App">
        <Col md={8} mdOffset={2}>
          <Panel>
            <Panel.Body>
              <Jumbotron className='Header'>
                <h1>Quote App</h1>
              </Jumbotron>
            
              <SearchBar
                searchTerm={this.state.searchTerm}
                onSearchTermInput={this.onSearchTermInput}
              />
            </Panel.Body>
            <Panel.Footer>
              &copy;2018 Quote App
            </Panel.Footer>
          </Panel>
        </Col>
      </div>
    );
  }
}
