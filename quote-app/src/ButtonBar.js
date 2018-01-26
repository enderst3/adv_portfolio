import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class ButtonBar extends Component {
  
  render () {
    return (
      <div className='buttons'>
        <Button
          id='save-button'
          onClick={this.props.onSave}
        >
          Save Quote
        </Button>
        <Button
          id='view-button'
          onClick={this.props.onView}
        >
          View Saved Quotes
        </Button>
        <Button
          id='search-button'
          onClick={this.props.onSearch}
        >
          Search Saved Quotes
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