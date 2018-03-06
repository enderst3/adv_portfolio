import React, { Component } from 'react'
import { Button, Col, ListGroupItem, FormControl } from 'react-bootstrap'


export default class TaskListItem extends Component {
  constructor (props) {
    super(props)
   
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleChange = this.props.addTaskInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.removeItem(this.props.item.id)
  }

  handleEditClick (e) {
    e.preventDefault()
    this.props.editTask(this.props.item.id)
    
  }

  handleCancelClick (e) {
    this.props.cancelEditing()
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitEditedTask(this.props.item.id)
  }

  render () {
    if (this.props.currentTask === this.props.item.id) {
      return (
        <form
          onSubmit={this.handleSubmit}
          value={this.props.item.id}
        >
          <Col md={10} mdOffset={1}>
            <ListGroupItem
              key={this.props.item.id}
            >
              <FormControl
                type='text'
                name='task'
                onChange={this.handleChange}
                value={this.props.task}
                defaultValue={this.props.item.task}
              />
              <Button
                bsSize='xsmall'
                onClick={this.handleDeleteClick}
                value={this.props.item.id}
              >
                Delete Task
              </Button>
              <Button
                bsSize='xsmall'
                onClick={this.handleSubmit}
                value={this.props.item.id}
              >
                Save Edit
              </Button>
              <Button
                bsSize='xsmall'
                onClick={this.handleCancelClick}
                value={this.props.item.id}
              >
                Cancel Edit
              </Button>
            </ListGroupItem>
          </Col>
        </form>
      )
    }
    
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
