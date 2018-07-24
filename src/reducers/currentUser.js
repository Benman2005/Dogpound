import {userData} from '../data/userData'
import {SHOW_USER} from '../actions/showUser'

const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case SHOW_USER: 
    return action.payload
    
      default:
      return state
    }
  }
  
  export default reducer