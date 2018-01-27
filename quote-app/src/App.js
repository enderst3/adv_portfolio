// remove search quote until searchSaveQuotes is clicked
// onKeyPress to trigger prevent default, and trigger quote search
// populate viewSavedQuotes
// add and remove quotes to QuoteData 
// if statement for the compontentWillMount()
// toggle searchBar


import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import DisplayQuote from './DisplayQuote'
import ButtonBar from './ButtonBar'
import QuoteData from './QuoteData'
import QuoteList from './QuoteList'
import './App.css';
// import QuoteListItem from './QuoteListItem';


const url = "https://talaikis.com/api/quotes/random/"
// const url = "http://quotes.rest/qod.json"


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newQuote: [],
      searchTerm: '',
      savedQuoteList: []
    }
    this.onSearchTermInput = this.onSearchTermInput.bind(this)
    this.onSeeQuote= this.onSeeQuote.bind(this)
    // this.onSave = this.onSave.bind(this)
    this.onShowSavedQuotes= this.onShowSavedQuotes.bind(this)
    // this.onAdd = this.onAdd.bind(this)
  }

  onSearchTermInput (e) {
    this.setState({searchTerm: e.target.value})
  }
  
  onSeeQuote () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(newQuote => {
        this.setState({newQuote: newQuote})
        console.log('newqoute= ',newQuote)
      }).catch((err) => {
        console.log('parsing failed', err)
      })
  }

  onShowSavedQuotes () {
    this.setState({
      savedQuoteList: QuoteData
    })
  }

  // onShowSavedQuotes () {
  //   savedQuoteList.forEach((savedQuote) => {
  //     // console.log(savedQuote.quoteText)
  //     // console.log(savedQuote.quoteAuthor)
  //   })
  // }


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
                onSeeQuote={this.onSeeQuote}
                onShowSavedQuotes={this.onShowSavedQuotes}
              />
              
              <SearchBar
                searchTerm={this.state.searchTerm}
                onSearchTermInput={this.onSearchTermInput}
              />
              <QuoteList
                savedQuoteList={this.state.savedQuoteList}
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


