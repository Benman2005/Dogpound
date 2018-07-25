import {SHOW_SELLER} from '../actions/showSeller'

const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case SHOW_SELLER: 
    return action.payload
    
      default:
      return state
    }
  }
  
  export default reducer