import React, { Component } from 'react';
import { Jumbotron, Col, Panel, Button } from 'react-bootstrap'
import DisplayQuoteOd from './DisplayQuoteOd'
import firebase from './firebase'
import QuoteList from './QuoteList'
import './App.css'

const url = "https://talaikis.com/api/quotes/random/"
const itemsRef = firebase.database().ref('QuoteData')

// Needs AddQuoteBar

// Needs SearchQuoteBar

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
