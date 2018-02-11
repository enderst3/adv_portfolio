import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'

// need button bar component
// need add quote component
// not sure about adding search
const url = "https://talaikis.com/api/quotes/random/"
const itemsRef = firebase.database().ref('QuoteData')

// needs own page child of app
const DisplayQuote = ({newQuote}) => {
  if (!newQuote) {
    return(
      <div>Loading...</div>
    )
  }
  
  return (
    <div className='QuotePanel'>
      <p>{newQuote.quote}</p>
      <p>__________</p>
      <p>{newQuote.author}</p>
    </div>
  )
}

// needs own page child of quotelist
class QuoteListItem extends Component {
  constructor(props) {
    super(props)
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick (e) {
    console.log('click')
    this.props.removeItem(this.props.item.id)
  }

  render () {
    return(
      <li key={this.props.item.id}>
        <h3>{this.props.item.quote}</h3>
        <p>By: {this.props.item.author}</p>
        <button
          onClick={this.handleDeleteClick}
          value={this.props.item.id}
        >
          Remove item
        </button>
      </li>
    )
  }
}

// needs own page child of app parent of quotelist item
const QuoteList = (props) => {
  const quoteData = props.items.map((item) => {
    return (
      <QuoteListItem 
        key={item.id}
        item={item}
        removeItem={props.removeItem}
      />
    )
  })

  return (
    <ul className='QuoteList'>
      <br/>
      {quoteData}
    </ul>
  )
}

// parent
class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        newQuote: [],
        author: '',
        quote: '',
        items: [],
        searchTerm: '',
        showQuoteList: false
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveQod = this.saveQod.bind(this)
    this.searchQuotes = this.searchQuotes.bind(this)
    this.removeItem = this.removeItem.bind(this)
    // this.displayQuotes = this.displayQuotes.bind(this)
  }

  // captures text for the quote
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // submits the quote data to firebase
  handleSubmit(e) {
    e.preventDefault()
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

  // displays quote of the day
  componentWillMount () {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(newQuote => {
        this.setState({newQuote: newQuote})
        console.log('success', newQuote)
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

  
  // displays saved quotes
  // displayQuotes(e) {
  //   e.preventDefault()
  //   itemsRef.on('value', (snapshot) => {
  //     let items = snapshot.val()
  //     let newState =[]
  //     for (let item in items) {
  //       newState.push({
  //         id: item,
  //         author: items[item].author,
  //         quote: items[item].quote
  //       })
  //     }
  //     this.setState({
  //       items: newState,
  //       showQuoteList: !this.state.showQuoteList
  //     })
  //   })
  // }

  // removes quote from firebase
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/QuoteData/${itemId}`)
    itemRef.remove()
  }

  // Save Quote of the Day
  saveQod (e) {
    e.preventDefault()
    let data = {
      quote: this.state.newQuote.quote,
      author: this.state.newQuote.author
    }

    itemsRef.push(data)
    
  }

  // Search Quotes
  searchQuotes (e) {
    e.preventDefault()
    console.log('searchTerm = ', this.state.searchTerm)
    const authorRef = itemsRef.orderByChild('author').equalTo(this.state.searchTerm)
    console.log(authorRef)
  }

  render() {
    return (
      <div className='App'>
        <header>
            <div className='wrapper'>
              <h1>Quote of the Day</h1>
              
            </div>
        </header>
        <div className='container'>
          <p>____________________________</p>
          <DisplayQuote 
            newQuote={this.state.newQuote}
          />
          <button
            onClick={this.saveQod}
          >
            Save Quote of the Day
          </button>
          <form
            onClick={this.searchQuotes}  
          >
              <input
                type='text'
                name='searchTerm'
                placeholder="Search your quotes..."
                onChange={this.handleChange}
                value={this.state.searchTerm}
              />
              <button>Search</button>
          </form> 
          <section className='add-item'>
              <form
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  name="author"
                  placeholder="Author of the Quote..."
                  onChange={this.handleChange}
                  value={this.state.author}
                />
                <input 
                  type="text"
                  name="quote"
                  placeholder="Quote text..."
                  onChange={this.handleChange}
                  value={this.state.quote}
                />
                <button>Add Quote</button>
              </form>
          </section>
          <section className='display-item'>
            <button onClick={this.displayQuotes}>
              Show Saved quotes
            </button>
            <div className='wrapper'>
            {/* {this.state.showQuoteList && */}
              <QuoteList 
                items={this.state.items}
                removeItem={this.removeItem}
              />
            {/* } */}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
