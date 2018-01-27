
import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import SearchBar from './SearchBar'
import DisplayQuote from './DisplayQuote'
import ButtonBar from './ButtonBar'
import QuoteData from './QuoteData'
import QuoteList from './QuoteList'
import './App.css';


const url = "https://talaikis.com/api/quotes/random/"
// const url = "http://quotes.rest/qod.json"


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newQuote: [],
      searchTerm: '',
      savedQuoteList: [],
      newQuoteList: []
    }
    this.onSearchTermInput = this.onSearchTermInput.bind(this)
    // this.onSeeQuote= this.onSeeQuote.bind(this)
    this.onSave = this.onSave.bind(this)
    // this.onShowSavedQuotes= this.onShowSavedQuotes.bind(this)
    // this.onAdd = this.onAdd.bind(this)
  }

  onSave () {
    console.log('clicked')
    console.log('savedQuoteList', this.state.savedQuoteList)
    console.log('newQuote', this.state.newQuote)
    // this.state.savedQuoteList.unshift(this.state.newQuote)
    this.setState({
      newQuoteList: this.state.savedQuoteList.unshift(this.state.newQuote)
    })
    console.log('newQuoteList', this.state.newQuoteList)
    // QuoteData = this.state.savedQuoteList
  }

  onSearchTermInput (e) {
    // console.log(e.target.value)
    this.setState({searchTerm: e.target.value})
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
              
              <SearchBar
                searchTerm={this.state.searchTerm}
                onSearchTermInput={this.onSearchTermInput}
              />
              <QuoteList
                savedQuoteList={this.state.savedQuoteList}
                searchTerm={this.state.searchTerm}
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


