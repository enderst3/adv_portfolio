// child of app
// button bar for app
import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class ButtonBar extends Component {
  
  render () {
    return (
      <div className='buttons'>
        <Button
          id='save-button'
          onClick={this.props.onSeeQuote}
        >
          See the Quote of the Day
        </Button>
        <Button
          id='save-button'
          onClick={this.props.onSave}
        >
          Save Quote of the Day
        </Button>
        <Button
          id='view-button'
          onClick={this.props.onShowSavedQuotes}
        >
          View Saved Quotes
        </Button>
        <Button
          id='Add-button'
          onClick={this.props.onAdd}
        >
          Add a Quote
        </Button>
      </div>
    )
  }
}