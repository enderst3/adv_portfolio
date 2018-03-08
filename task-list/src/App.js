import React, { Component } from 'react'
import { Jumbotron, Col, Panel, Button } from 'react-bootstrap'
import './App.css'
import firebase from './firebase'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Col md={8} mdOffset={2}>
          <Panel>
          <Panel.Body>
            <Jumbotron className='Header'>
              <h1>Task List App</h1>
            </Jumbotron>

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

