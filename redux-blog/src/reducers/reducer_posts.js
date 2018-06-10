import _ from 'lodash'
import { FETCH_POSTS } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    // need to change response from [ post1 , post2, ... ]
    // to {1: post, 2: post}
    // we use _.mapKeys() to do this.
    return _.mapKeys(action.payload.data, 'id')
  default:
    return state
  }
}