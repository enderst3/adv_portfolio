// remove search quote until searchSaveQuotes is clicked
// onKeyPress to trigger prevent default, and trigger quote search
// populate viewSavedQuotes
// add and remove quotes to QuoteData 



import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import DisplayQuote from './DisplayQuote'
import ButtonBar from './ButtonBar'
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
    // this.onSave = this.onSave.bind(this)
    // this.onView = this.onView.bind(this)
    // this.onSearch = this.onSearch.bind(this)
    // this.onAdd = this.onAdd.bind(this)
  }

  onSearchTermInput (e) {
    this.setState({searchTerm: e.target.value})
  }
  
  componentWillMount () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(newQuote => {
        this.setState({newQuote: newQuote})
        // console.log('parsed json', json.contents.quotes)
        console.log('newqoute= ',newQuote)
        
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
                <h1>Quote of The Day</h1>
                <p>____________________________</p>
                <DisplayQuote 
                  newQuote={this.state.newQuote}
                />
              </Jumbotron>
              <ButtonBar

              
              
              />
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


