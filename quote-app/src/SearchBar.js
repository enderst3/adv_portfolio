// bar to search saved quotes

import React, {Component} from 'react'
import {FormControl, Panel} from 'react-bootstrap'
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
      <Panel.Body className='SearchBar'>
        <h3>Search Your Quotes!</h3>
        <form>
          <FormControl
            id='quote-filter'
            type='text'
            placeholder='Search by Author or keyword...'
            value={this.props.searchTerm}
            onChange={this.textChangeCallback}
            onKeyPress={this.handleOnKeyPress}
          />
        </form>
      </Panel.Body>
    )
  }
}

SearchBar.propTypes = {
  onSearchTermInput: PropTypes.func,
  searchTerm: PropTypes.string
}
