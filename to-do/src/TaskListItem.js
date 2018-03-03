import React, { Component } from 'react'
import { Button, Col, ListGroupItem, FormControl } from 'react-bootstrap'


export default class TaskListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: null,
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleChange = this.props.addTaskInput.bind(this)
    this.handleSubmit = this.props.submitEditedTask.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.removeItem(this.props.item.id)
  }

  handleEditClick (e) {
    e.preventDefault()
    this.props.editTask(this.props.item.id, this.props.item.task)
    this.setState({
      isEditing: e.target.value
    })
  }

  handleCancelClick (e) {
    this.setState({
      isEditing: null
    })
  }

  render () {
    if (this.state.isEditing === this.props.item.id) {
      return (
        <form
          onSubmit={this.handleSubmit}
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
                type='submit'
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
