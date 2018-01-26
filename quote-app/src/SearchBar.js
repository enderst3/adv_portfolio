// bar to search saved quotes

import React, {Component} from 'react'
import {FormControl, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'


export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.textChangeCallback = this.props.onSearchTermInput.bind(this)
  }

  handleOnKeyPress (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  render () {
    return (
      <div className='SearchBar'>
        <h3>Search Your Saved Quotes</h3>
        <form>
          <FormControl
            id='quote-filter'
            type='text'
            placeholder='Search by Author or keyword...'
            value={this.props.searchTerm}
            onChange={this.textChangeCallback}
            onKeyPress={this.handleOnKeyPress}
          />
          <br/>
          <Button 
            id='search-button'
            onClick={this.textChangeCallback}
          >
            Search
          </Button>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchTermInput: PropTypes.func,
  searchTerm: PropTypes.string
}
