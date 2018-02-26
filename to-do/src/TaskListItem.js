import React, { Component } from 'react'
import { Button, Col, ListGroupItem } from 'react-bootstrap'


export default class TaskListItem extends Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.removeItem(this.props.item.id)
  }

  render () {
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


// var TodoItem = React.createClass({
// 	removeNode: function (e) {
// 		e.preventDefault();
// 		this.props.removeNode(this.props.nodeId);
// 		return;
// 	},
// 	toggleComplete: function (e) {
// 		e.preventDefault();
// 		this.props.toggleComplete(this.props.nodeId);
// 		return;
// 	},
// 	updateClass: function () {
		
// 	},
// 	render: function() {
// 		var classes = 'list-group-item clearfix';
// 		if (this.props.complete === 'true') {
// 			classes = classes + ' list-group-item-success';
// 		}
// 		return (
// 			<li className={classes}>
// 				{this.props.task}
// 				<div className="pull-right" role="group">
//                     <button 
//                      type="button" 
//                      className="btn btn-xs btn-success img-circle" 
//                      onClick={this.toggleComplete}>
//                         &#x2713;
//                      </button> 
//                      <button 
//                         type="button" 
//                         className="btn btn-xs btn-danger img-circle" 
//                         onClick={this.removeNode}>
//                             &#xff38;
//                     </button>
// 				</div>
// 			</li>
// 		);
// 	}
// });