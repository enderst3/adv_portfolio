import React, { Component } from 'react'
import { Button, Col, ListGroupItem, FormControl } from 'react-bootstrap'


export default class TaskListItem extends Component {

  render () {
    // form for displaying task list
    return (
      <div>
        <Col md={10} mdOffset={1}>
          <ListGroupItem
            key={this.props.item.id}
          >
            <p>{this.props.item.task}</p>
          </ListGroupItem>
        </Col>
      </div>
    )
  }
}
