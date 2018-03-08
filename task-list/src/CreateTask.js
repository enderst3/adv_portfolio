import React, { Component } from 'react'
import { Well, FormControl, FormGroup, Button } from 'react-bootstrap'


export default class CreateTask extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
        <Well className='add-item'>
        <form>
          <FormGroup>
            <FormControl
              type='text'
              name='task'
              placeholder='Create a Task...'
            />
            <br />
            <Button
              type='submit'
            >
              Add Task to List
            </Button>
          </FormGroup>
        </form>
      </Well>
    )
  }
}