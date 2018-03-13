import React, { Component } from 'react'
import { Button, Col, ListGroupItem, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class QuoteListItem extends Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleChange = this.props.addQuoteInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.removeItem(this.props.item.id)
  }

  handleEditClick (e) {
    e.preventDefault()
    this.props.editQuote(this.props.item.id)
  }

  handleCancelClick (e) {
    this.props.cancelEditing()
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitEditedQuote(this.props.item.id)
  }

  render () {
    if (this.props.selectedQuote === this.props.item.id) {
      // Edit Display
      return (
        <div>
          <Col md={10} mdOffset={1}>
            <ListGroupItem
              key={this.props.item.id}
            >
              <FormControl
                type='text'
                name='quote'
                onChange={this.handleChange}
                value={this.props.Quote}
                defaultValue={this.props.item.quote}
              />
              <FormControl
                type='text'
                name='author'
                onChange={this.handleChange}
                value={this.props.Author}
                defaultValue={this.props.item.author}
              />
              <Button
                bsSize='xsmall'
                onClick={this.handleDeleteClick}
                value={this.props.item.id}
              >
                Delete Quote
              </Button>
              <Button
                bsSize='xsmall'
                onClick={this.handleCancelClick}
                value={this.props.item.id}
              >
                Cancel Edit
              </Button>
              <Button
                bsSize='xsmall'
                onClick={this.handleSubmit}
                value={this.props.item.id}
              >
                Save Edit
              </Button>
            </ListGroupItem>
          </Col>
        </div>
      )
    }
    // Normal Display
    return (
      <div>
        <Col md={10} mdOffset={1}>
          <ListGroupItem
            key={this.props.item.id}
          >
            <p>"{this.props.item.quote}"</p>
            <p>-{this.props.item.author}</p>
            <Button
              bsSize='xsmall'
              onClick={this.handleDeleteClick}
              value={this.props.item.id}
            >
              Delete Quote
            </Button>
            <Button
              bsSize='xsmall'
              onClick={this.handleEditClick}
              value={this.props.item.id}
            >
              Edit Task
            </Button>
          </ListGroupItem>
        </Col>
      </div>
    )
  }
}

QuoteListItem.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func
}