// child of quotelist
// each quote in the quote list

import React, { Component } from 'react'
import {ListGroupItem, Col, Button} from 'react-bootstrap'

// const QuoteListItem = ({savedQuote}) => {
export default class QuoteListItem extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (e) {
    this.props.onDeleteQuote(this.props.deleteQuote)
  }

  render () {
    // const filterQuote = this.props.savedQuote.quote.toLowerCase().indexOf(this.props.searchTerm) !== -1
    // const filterAuthor = this.props.savedQuote.author.toLowerCase().indexOf(this.props.searchTerm) !== -1
    // const filterCategory = this.props.savedQuote.category.toLowerCase().indexOf(this.props.searchTerm) !== -1

    // if (filterQuote || filterAuthor || filterCategory) {

    
      return (
        <div>
          <Col md={10} mdOffset={1}>
            <br/>
            <ListGroupItem
              className='Results'
              value={this.props.quote}
            >
              <div className='SavedQuoteText'>
                <p>"{this.props.savedQuote.quote}"</p>
                <p>-{this.props.savedQuote.author}</p>
              </div>
              <Button
                bsSize='xsmall'
                onClick={this.props.onDeleteQuote}
                value={this.deleteQuote}
              >
                Delete
              </Button>
            </ListGroupItem>
          </Col>
        </div>
      )
    }
  // return null
  // }
} 
// export default QuoteListItem
