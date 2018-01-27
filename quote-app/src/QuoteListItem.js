// each quote in the quote list

import React from 'react'
import {ListGroupItem, Col} from 'react-bootstrap'

const QuoteListItem = ({savedQuote}) => {
  return (
    <div>
      <Col md={10} mdOffset={1}>
        <br/>
        <ListGroupItem
          className='Results'
        >
          <div className='SavedQuoteText'>
            <p>"{savedQuote.quoteText}"</p>
            <p>-{savedQuote.quoteAuthor}</p>
          </div>
        </ListGroupItem>
      </Col>
    </div>
  )
}

export default QuoteListItem
