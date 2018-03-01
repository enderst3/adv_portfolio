import React, { Component } from 'react'
import { Jumbotron, Col, Panel, Button } from 'react-bootstrap'
import DisplayQuoteOd from './DisplayQuoteOd'
import firebase from './firebase'
import AddQuote from './AddQuote'
import DisplayQuoteList from './DisplayQuoteList'
import './App.css'

/* global fetch */

const url = 'https://talaikis.com/api/quotes/random/'
const itemsRef = firebase.database().ref('QuoteData')


export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      QuoteOd: [],
      author: '',
      quote: '',
      items: [],
      showSearchBar: false
    }
    this.saveQuoteOd = this.saveQuoteOd.bind(this)
    this.submitAddedQuote = this.submitAddedQuote.bind(this)
    this.addQuoteInput = this.addQuoteInput.bind(this)
    this.openSearchBar = this.openSearchBar.bind(this)
  }

  // displays quote of the day
  // and saved quotes on page load
  componentWillMount () {
    fetch(url)
      .then((response) => {
        return response.json()
      }).then(QuoteOd => {
        this.setState({QuoteOd: QuoteOd})
        console.log('success', this.state.QuoteOd)
      }).catch((err) => {
        console.log('parsing failed', err)
      })

    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val()
      let newState = []
      for (let item in items) {
        newState.push({
          id: item,
          author: items[item].author,
          quote: items[item].quote
        })
      }
      this.setState({
        items: newState.reverse()
      })
    })
  }

  // Save Quote of the Day
  saveQuoteOd (e) {
    e.preventDefault()
    let data = {
      quote: this.state.QuoteOd.quote,
      author: this.state.QuoteOd.author
    }
    itemsRef.push(data)
  }

  // removes quote from firebase
  removeItem (itemId) {
    const itemRef = firebase.database().ref(`/QuoteData/${itemId}`)
    itemRef.remove()
  }

  // captures text for the quote
  addQuoteInput (e) {
    this.setState({
      // gets value from both text areas
      [e.target.name]: e.target.value
    })
  }

  // submits the quote data to firebase
  submitAddedQuote (e) {
    e.preventDefault()
    // resets the input areas
    e.target.reset()
    const item = {
      author: this.state.author,
      quote: this.state.quote
    }
    itemsRef.push(item)
    this.setState({
      quote: '',
      author: ''
    })
  }

  openSearchBar () {
    console.log('show search clicked')
    this.setState({
      showSearchBar: !this.state.showSearchBar
    })
  }

  render () {
    return (
      <div className='App'>
        <Col md={8} mdOffset={2}>
          <Panel>
            <Panel.Body>
              <Jumbotron className='Header'>
                <h1>Quote of The Day</h1>
                <p>____________________________</p>
                <DisplayQuoteOd
                  QuoteOd={this.state.QuoteOd}
                />
                <Button
                  onClick={this.saveQuoteOd}
                >
                  Save Quote of the Day
                </Button>
              </Jumbotron>
              <AddQuote
                submitAddedQuote={this.submitAddedQuote}
                addQuoteInput={this.addQuoteInput}
              />
              <DisplayQuoteList
                items={this.state.items}
                removeItem={this.removeItem}
                openSearchBar={this.openSearchBar}
                showSavedQuotes={this.showSavedQuotes}
                showSearchBar={this.state.showSearchBar}
              />
            </Panel.Body>
            <Panel.Footer>
              &copy;2018 Quote App
            </Panel.Footer>
          </Panel>
        </Col>
      </div>
    )
  }
}