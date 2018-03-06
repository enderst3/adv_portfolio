import React, { Component } from 'react'
import { Jumbotron, Col, Panel } from 'react-bootstrap'
import CreateTask from './CreateTask'
import firebase from './firebase'
import TaskList from './TaskList'
import './App.css'


const itemsRef = firebase.database().ref('items');

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: '',
      items: [],
      currentTask: null
    }
    this.addTaskInput = this.addTaskInput.bind(this)
    this.submitNewTask = this.submitNewTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.submitEditedTask = this.submitEditedTask.bind(this)
    this.cancelEditing = this.cancelEditing.bind(this)
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

  // Deletes task for firebase
  removeItem (itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`)
    itemRef.remove()
  }

  // when edit button clicked, sets
  // the currentTask state to item
  editTask (itemId) {
    this.setState({
      currentTask: itemId
    })
  }

  // submits the edited task to firebase then sets 
  // state back to default
  submitEditedTask (itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`)
    itemRef.set ({
      task: this.state.task
    })
    this.setState({
      currentTask: null,
      task: ''
    })
  }

  // Cancels editing by setting state back to default
  cancelEditing (e) {
    this.setState({
      currentTask: null
    })
  }

  // displays the App
  render() {
    return (
      <div className="App">
        <Col md={8} mdOffset={2}>
          <Panel>
          <Panel.Body>
            <Jumbotron className='Header'>
              <h1>To Do List</h1>
            </Jumbotron>
            <CreateTask 
              submitNewTask={this.submitNewTask}
              addTaskInput={this.addTaskInput}
            />
            <TaskList 
              items={this.state.items}
              removeItem={this.removeItem}
              editTask={this.editTask}
              addTaskInput={this.addTaskInput}
              submitEditedTask={this.submitEditedTask}
              cancelEditing={this.cancelEditing}
              currentTask={this.state.currentTask}
            />
          </Panel.Body>
          <Panel.Footer>
            &copy;2018 ToDo App
          </Panel.Footer>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default App;