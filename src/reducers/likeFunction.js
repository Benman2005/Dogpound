import {LIKE_USER} from '../actions/likeUser'


const initialState = {  liked:[], disliked: [] } 

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case LIKE_USER: 
    return [...state, action.payload]
      default:
      return state
    }
  }
  
export default reducer