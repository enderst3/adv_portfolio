import React from 'react'
import QuoteListItem from './QuoteListItem'
import { ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

const QuoteList = (props) => {
  const quoteData = props.items.map((item) => {
    return (
      <QuoteListItem
        key={item.id}
        item={item}
        removeItem={props.removeItem}
        editQuote={props.editQuote}
        selectedQuote={props.selectedQuote}
        cancelEditing={props.cancelEditing}
        addQuoteInput={props.addQuoteInput}
        submitEditedQuote={props.submitEditedQuote}
      />
    )
  })
  return (
    <ListGroup className='QuoteList'>
      <br />
      {quoteData}
    </ListGroup>
  )
}

export default QuoteList

QuoteList.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func,
  items: PropTypes.array
}