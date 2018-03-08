import React, { Component } from 'react'
import { Jumbotron, Col, Panel, Button } from 'react-bootstrap'
import './App.css'
import firebase from './firebase'
import CreateTask from './CreateTask'


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: '',
      items: []
    }
    this.addTaskInput = this.addTaskInput.bind(this)
    this.submitNewTask = this.submitNewTask.bind(this)
  }

  // captures text for the new task
  addTaskInput (e) {
    // console.log(e.target.value)
    this.setState({
      task: e.target.value
    })
  }

  // submits the quote data to firebase
  submitNewTask (e) {
    e.preventDefault()
    const itemsRef = firebase.database().ref('items');
    // resets the input areas
    e.target.reset()
    const item = {
      task: this.state.task
    }
    itemsRef.push(item)
    this.setState({
      task: ''
    })
  }

  // retrieves tasks from out database
  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          task: items[item].task,
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Col md={8} mdOffset={2}>
          <Panel>
          <Panel.Body>
            <Jumbotron className='Header'>
              <h1>Task List App</h1>
            </Jumbotron>
            <CreateTask
              submitNewTask={this.submitNewTask}
              addTaskInput={this.addTaskInput}
            />
          </Panel.Body>
          <Panel.Footer>
            &copy;2018 Task List App
          </Panel.Footer>
          </Panel>
        </Col>
      </div>
    );
  }
}

