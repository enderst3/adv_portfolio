import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import DisplayQuote from './DisplayQuote'
import ButtonBar from './ButtonBar'
import QuoteData from './QuoteData'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'
import './App.css';

// parent highest level


const url = "https://talaikis.com/api/quotes/random/"
// const url = "http://quotes.rest/qod.json"


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newQuote: [],
      searchTerm: '',
      savedQuoteList: [],
      newQuoteList: [],
      addQuoteText: '',
      addAuthorText: ''
    }
    this.onSearchTermInput = this.onSearchTermInput.bind(this)
    this.onDeleteQuote = this.onDeleteQuote.bind(this)
    this.onSave = this.onSave.bind(this)
    this.addQuoteInput = this.addQuoteInput.bind(this)
    this.addAuthorInput = this.addAuthorInput.bind(this)
    this.addQuoteTextInput = this.addQuoteTextInput.bind(this)
    // this.onSeeQuote= this.onSeeQuote.bind(this)
    // this.onShowSavedQuotes= this.onShowSavedQuotes.bind(this)
    // this.onAdd = this.onAdd.bind(this)
  }

  
  onSearchTermInput (e) {
    // console.log(e.target.value)
    this.setState({searchTerm: e.target.value})
  }

  onDeleteQuote (deleteQuote) {
    console.log('Delete Quote Clicked')
  }

  onSave () {
    // this.state.savedQuoteList.unshift(this.state.newQuote)
    console.log(' Save Quote Clicked')
    console.log('savedQuoteList', this.state.savedQuoteList)
    console.log('newQuote', this.state.newQuote)

    this.setState({
      newQuoteList: this.state.savedQuoteList.unshift(this.state.newQuote)
    })
    console.log('newQuoteList', this.state.newQuoteList)
  }

  addQuoteInput (e) {
    console.log('Add Entered Quote Clicked')
    
  }

  addAuthorInput (e) {
    console.log(e.target.value)
    this.setState({addAuthorText: e.target.value})
  }

  addQuoteTextInput (e) {
    console.log(e.target.value)
    this.setState({addQuoteText: e.target.value})
  }


  componentWillMount () {
  // onSeeQuote () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(newQuote => {
        this.setState({newQuote: newQuote})
        console.log('newqoute= ',newQuote)
      }).catch((err) => {
        console.log('parsing failed', err)
      })
  // }

  // componentWillMount () {
  // onShowSavedQuotes () {
    this.setState({
      savedQuoteList: QuoteData
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
                onSeeQuote={this.onSeeQuote}
                onShowSavedQuotes={this.onShowSavedQuotes}
                onSave={this.onSave}
              />
              <AddQuote
                addQuoteInput={this.addQuoteInput}
                addQuoteText={this.state.addQuoteText}
                addAuthorText={this.state.addAuthorText}
                addQuoteTextInput={this.addQuoteTextInput}
                addAuthorInput={this.addAuthorInput}
              />
              <SearchBar
                searchTerm={this.state.searchTerm}
                onSearchTermInput={this.onSearchTermInput}
              />
              <QuoteList
                savedQuoteList={this.state.savedQuoteList}
                searchTerm={this.state.searchTerm}
                onDeleteQuote={this.onDeleteQuote}
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


