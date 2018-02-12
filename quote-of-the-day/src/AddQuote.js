import React, { Component } from 'react'
import {FormControl, Button, Panel, FormGroup} from 'react-bootstrap'


export default class AddQuote extends Component {
  constructor(props) {
    super(props)
      this.handleAddSubmit = this.props.submitAddedQuote.bind(this)
      this.handleChange = this.props.addQuoteInput.bind(this)
  }

  render () {
    return (
      <Panel className='add-item'>
        <form
          onSubmit={this.handleAddSubmit}
        >
          <FormGroup>
            <FormControl
              type="text"
              name="author"
              placeholder="Author of the Quote..."
              onChange={this.handleChange}
              value={this.props.author}
            />
            <FormControl
              type="text"
              name="quote"
              placeholder="Quote text..."
              onChange={this.handleChange}
              value={this.props.quote}
            />
            <Button
              bsSize='small'
              type='submit'
            >
              Add Quote
            </Button>
          </FormGroup>
        </form>
      </Panel>
    )
  }
} 

