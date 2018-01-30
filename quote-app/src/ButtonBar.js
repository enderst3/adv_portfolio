// child of app
// button bar for app
import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class ButtonBar extends Component {
  constructor (props) {
    super(props)
    this.handleOnAddClick = this.handleOnAddClick.bind(this)
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this)
    this.handleShowQuotesClick = this.handleShowQuotesClick.bind(this)
  }

  handleOnAddClick () {
    this.props.onAdd()
  }

  handleSearchOnClick () {
    this.props.openSearchBar()
  }

  handleShowQuotesClick () {
    this.props.onShowSavedQuotes()
  }
  
  render () {
    return (
      <div className='buttons'>
        <Button
          id='search-button'
          onClick={this.handleSearchOnClick}
        >
          Search My Quotes
        </Button>
        <Button
          id='save-button'
          onClick={this.props.onSave}
        >
          Save Quote of the Day
        </Button>
        <Button
          id='view-button'
          onClick={this.handleShowQuotesClick}
        >
          View Saved Quotes
        </Button>
        <Button
          id='Add-button'
          onClick={this.handleOnAddClick}
        >
          Add a Quote
        </Button>
      </div>
    )
  }
}