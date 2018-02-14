import React, { Component } from 'react';
import { Jumbotron, Col, Panel, Button, ListGroupItem } from 'react-bootstrap'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom'
import DisplayQuoteOd from './DisplayQuoteOd'
import firebase from './firebase'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'
import './App.css'

const url = "https://talaikis.com/api/quotes/random/"
const itemsRef = firebase.database().ref('QuoteData')

// Needs SearchQuoteBar
// add proptypes
// set up linting

// =================================
// const Hit = ({ hit }) =>
// <Col md={10} mdOffset={1}>
//   <ListGroupItem 
    
//   >
//     <p>"{hit.quote}"</p>
//     <p>-{hit.author}</p>
//     <Button
//       bsSize='xsmall'
//       onClick={this.handleDeleteClick}
//       // value={this.props.item.id}
//     >
//       Delete Quote
//     </Button>
//   </ListGroupItem>
// </Col>

// const Content = () =>
//   <div className='content'>
//     <Hits hitComponent={Hit} />
//   </div>

// =================================

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      QuoteOd: [],
      author: '',
      quote: '',
      items: []
    }
    this.saveQuoteOd = this.saveQuoteOd.bind(this)
    this.submitAddedQuote = this.submitAddedQuote.bind(this)
    this.addQuoteInput = this.addQuoteInput.bind(this)
  }


  // displays quote of the day
  // and saved quotes on page load
  componentWillMount () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(QuoteOd => {
        this.setState({QuoteOd: QuoteOd})
        console.log('success', this.state.QuoteOd)
      }).catch((err) => {
        console.log('parsing failed', err)
      })

      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val()
        let newState =[]
        for (let item in items) {
          newState.push({
            id: item,
            author: items[item].author,
            quote: items[item].quote
          })
        }
        this.setState({
          items: newState.reverse(),
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
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/QuoteData/${itemId}`)
    itemRef.remove()
  }

  // captures text for the quote
  addQuoteInput(e) {
    this.setState({
      // gets value from both text areas
      [e.target.name]: e.target.value
    })
  }

  // submits the quote data to firebase
  submitAddedQuote(e) {
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

  render() {
    return (
      <div className="App">
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
              {/* <InstantSearch
                appId="U7JUNZSA3C"
                apiKey="616990183d84b364679688900dba1266"
                indexName="QuoteData"
              >
                <SearchBox
                  translations={{placeholder:'Search Your Quotes...'}}
                />
                <Content />
              </InstantSearch> */}
              <QuoteList 
                items={this.state.items}
                removeItem={this.removeItem}
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

export default App;
