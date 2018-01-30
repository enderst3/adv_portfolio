// sibling of App
// needs to take onclick of add quote button from button bar
import React, {Component} from 'react'
import {FormControl, Button} from 'react-bootstrap'


export default class AddQuote extends Component {
  constructor(props) {
    super(props)
    this.addQuoteData = this.props.addQuoteInput.bind(this)
    this.quoteAuthorData = this.props.addAuthorInput.bind(this)
    this.quoteTextData = this.props.addQuoteTextInput.bind(this)
  }

  render () {
    return (
      <div className='AddQuote'>
        <h3>Add a Quote</h3>
        <form>
          <FormControl
            id='quote-text'
            type='text'
            placeholder='Quote...'
            onChange={this.quoteTextData}
            value={this.props.addQuoteText}
          />
          <br/>
          <FormControl
            id='author-text'
            type='text'
            placeholder='Authors Name...'
            onChange={this.quoteAuthorData}
            value={this.props.addAuthorText}
          />
          <br/>
          <Button 
            id='saveAddedQuote'
            onClick={this.addQuoteData}
          >
            Save This Quote
          </Button>
        </form>
      </div>
    )
  }
}