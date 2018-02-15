// child of app
// button bar for app
import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class ButtonBar extends Component {
  constructor (props) {
    super(props)
    this.handleAddQuoteClick = this.handleAddQuoteClick.bind(this)
    this.handleOpenSearchClick = this.handleOpenSearchClick.bind(this)
    this.handleShowQuotesClick = this.handleShowQuotesClick.bind(this)
  }

  handleAddQuoteClick (e) {
    e.preventDefault()
    this.props.addQuote()
  }

  handleOpenSearchClick (e) {
    e.preventDefault()
    this.props.openSearchBar()
  }

  handleShowQuotesClick (e) {
    e.preventDefault()
    this.props.showSavedQuotes()
  }
  
  render () {
    return (
      <div className='buttons'>
        <Button
          id='search-button'
          onClick={this.handleOpenSearchClick}
        >
          Search My Quotes
        </Button>
        <Button
          id='view-button'
          onClick={this.handleShowQuotesClick}
        >
          View Saved Quotes
        </Button>
        <Button
          id='Add-button'
          onClick={this.handleAddQuoteClick}
        >
          Add a Quote
        </Button>
        <br />
      </div>
    )
  }
}