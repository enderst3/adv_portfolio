import React, { Component } from 'react'
import { Button, Col, ListGroupItem, FormControl } from 'react-bootstrap'


export default class TaskListItem extends Component {
  constructor (props) {
    super (props)

    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.removeItem(this.props.item.id)
  }

  render () {
    // form for displaying task list
    return (
      <div>
        <Col md={10} mdOffset={1}>
          <ListGroupItem
            key={this.props.item.id}
          >
            <p>{this.props.item.task}</p>
            <Button
              bsSize='xsmall'
              onClick={this.handleDeleteClick}
              value={this.props.item.id}
            >
              Delete Task
            </Button>
          </ListGroupItem>
        </Col>
      </div>
    )
  }
}
