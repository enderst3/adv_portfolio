import React, { Component } from 'react'
import { FormControl, Button, FormGroup, Well } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class AddQuote extends Component {
  constructor (props) {
    super(props)
    this.handleAddSubmit = this.props.submitAddedQuote.bind(this)
    this.handleChange = this.props.addQuoteInput.bind(this)
  }

  render () {
    return (
      <Well className='add-item'>
        <form
          onSubmit={this.handleAddSubmit}
        >
          <FormGroup>
            <FormControl
              type='text'
              name='author'
              placeholder='Add Author of the Quote...'
              onChange={this.handleChange}
              value={this.props.author}
            />
            <br />
            <FormControl
              type='text'
              name='quote'
              placeholder='Add Quote text...'
              onChange={this.handleChange}
              value={this.props.quote}
            />
            <br />
            <Button
              type='submit'
            >
              Add Quote
            </Button>
          </FormGroup>
        </form>
      </Well>
    )
  }
}

AddQuote.propTypes = {
  submitAddedQuote: PropTypes.func,
  addQuoteInput: PropTypes.func,
  quote: PropTypes.string,
  author: PropTypes.string
}