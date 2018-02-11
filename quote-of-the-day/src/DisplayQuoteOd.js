// child of app
// display quote of the day

import React from 'react'


const DisplayQuoteOd = ({QuoteOd}) => {
  if (!QuoteOd) {
    return(
      <div>Loading...</div>
    )
  }
  
  return (
    <div className='QuotePanel'>
      <p>{QuoteOd.quote}</p>
      <p>__________</p>
      <p>{QuoteOd.author}</p>
      <br />
    </div>
  )
}

export default DisplayQuoteOd