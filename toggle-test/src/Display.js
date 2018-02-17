import React, { Component } from 'react';

class Display extends Component {
    constructor (props) {
      super (props)
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick (e) {
      console.log('click!')
      e.preventDefault()
      // this.setState({
      //   showNewDiv: !this.state.showNewDiv
      // })
      this.props.changeDiv()
    }
  
    render() {
      if (!this.props.showNewDiv) {
        return (
          <div>
          <button
            onClick = {this.handleClick}
          >
            Click Me!
          </button>
          <div>
            This is the OG div
          </div>
          
        </div>
         
        )
      }
      return (
        <div>
          <button
            onClick = {this.handleClick}
          >
            Click Me!
          </button>
          <div>
            This is the new div
          </div>
        </div>
      );
    }
  }
  
  export default Display;
  