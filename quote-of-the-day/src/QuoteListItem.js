import React, { Component } from 'react'
import { Button, Col, ListGroupItem } from 'react-bootstrap'

export default class QuoteListItem extends Component {
  constructor(props) {
    super(props)
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }
  
  handleDeleteClick (e) {
    this.props.removeItem(this.props.item.id)
  }
  
  render () {
    return(
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
          </ListGroupItem>
        </Col>
      </div>
      )
    }
  }