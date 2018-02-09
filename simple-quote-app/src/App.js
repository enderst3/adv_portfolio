import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        author: '',
        quote: '',
        items: []
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const itemsRef = firebase.database().ref('QuoteData')
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

  componentDidMount() {
    const itemsRef = firebase.database().ref('QuoteData')
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
        items: newState
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Quote App</h1>
              
            </div>
        </header>
        <div className='container'>
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
            <div className='wrapper'>
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <h3>{item.quote}</h3>
                      <p>By: {item.author}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
