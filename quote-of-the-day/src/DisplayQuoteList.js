// import React, {Component} from 'react'
// import {Button, Col, ListGroupItem} from 'react-bootstrap'
// import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom'
// import QuoteList from './QuoteList'


// const Hit = ({ hit }) =>
// <Col md={10} mdOffset={1}>
//   <ListGroupItem 
//   >
//     <p>"{hit.quote}"</p>
//     <p>-{hit.author}</p>
//   </ListGroupItem>
// </Col>

// const Content = () =>
//   <div className='content'>
//     <Hits hitComponent={Hit} />
//   </div>


// export default class DisplayQuoteList extends Component {
//   constructor (props) {
//     super(props)
    
//     this.state = {
//       showSearchBar: false
//     }

//     this.handleOpenSearchClick = this.handleOpenSearchClick.bind(this)
//     this.handleShowQuotesClick = this.handleShowQuotesClick.bind(this)
//   }

//   handleOpenSearchClick (e) {
//     console.log('click')
//     e.preventDefault()
//     this.state = {
//       showSearchBar: false
//     }
//   }

//   handleShowQuotesClick (e) {
//     e.preventDefault()
//     this.props.showSavedQuotes()
//   }
  
//   render () {
//     if (this.state.showSearchBar) {
//       return (
//         <div>
//           <Button
//             id='view-button'
//             onClick={this.handleShowQuotesClick}
//           >
//             View Saved Quotes
//           </Button>

//           <InstantSearch
//             appId="U7JUNZSA3C"
//             apiKey="616990183d84b364679688900dba1266"
//             indexName="QuoteData"
//           >
//             <SearchBox
//               translations={{placeholder:'Search Your Quotes...'}}
//             />
//             <Content />
//           </InstantSearch>
//         </div>
//       )
//     }
//     return (
//       <div className='SavedQuotes'>
//         <Button
//           id='search-button'
//           onClick={this.handleOpenSearchClick}
//         >
//           Search My Quotes
//         </Button>
//         <br />
//         <QuoteList 
//           items={this.props.items}
//           removeItem={this.props.removeItem}
//         />
//       </div>
//     )
//   }
// }

{/* <Button
  id='view-button'
  onClick={this.handleShowQuotesClick}
>
  View Saved Quotes
</Button> */}

{/* <InstantSearch
  appId="U7JUNZSA3C"
  apiKey="616990183d84b364679688900dba1266"
  indexName="QuoteData"
>
  <SearchBox
    translations={{placeholder:'Search Your Quotes...'}}
  />
  <Content />
</InstantSearch> */}