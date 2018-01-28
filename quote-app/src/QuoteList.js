// containter for the quotes

import React from 'react'
import QuoteListItem from './QuoteListItem'
import {ListGroup} from 'react-bootstrap'


const QuoteList = (props) => {
  const quoteItems = props.savedQuoteList.map((savedQuote) => {
    return (
      <QuoteListItem
        // key={savedQuote.quoteCategory}
        savedQuote={savedQuote}
        onDeleteQuote={props.onDeleteQuote}
      />
    )
  })

  return (
    <ListGroup className='QuoteList'>
      <br/>
      {quoteItems}
    </ListGroup>
  )
  
}

export default QuoteList 