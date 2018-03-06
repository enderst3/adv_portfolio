import React, { Component } from 'react'
import { Well, FormGroup, FormControl, Button } from 'react-bootstrap'


export default class CreateTask extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.props.submitNewTask.bind(this)
    this.handleChange = this.props.addTaskInput.bind(this)
  }

  render () {
    return(
      <Well className='add-item'>
        <form
          onSubmit={this.handleSubmit}
        >
          <FormGroup>
            <FormControl
              type='text'
              name='task'
              placeholder='Create a Task...'
              onChange={this.handleChange}
              value={this.props.task}
            />
            <br />
            <Button
              type='submit'
            >
              Add New Task
            </Button>
          </FormGroup>
        </form>
      </Well>
    
    )
  }
}