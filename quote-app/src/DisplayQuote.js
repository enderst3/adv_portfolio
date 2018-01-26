// display quote from app

import React from 'react'


const DisplayQuote = ({newQuote}) => {
  if (!newQuote) {
    return(
      <div>Loading...</div>
    )
  }
  
  return (
    <div className='QuotePanel'>
      <p>{newQuote.quote}</p>
      <p>__________</p>
      <p>{newQuote.author}</p>
    </div>
  )
}

export default DisplayQuote