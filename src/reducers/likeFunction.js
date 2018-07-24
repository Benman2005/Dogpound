import {userData} from '../data/userData'
import {SHOW_USER} from '../actions/showUser'
import {LIKE_USER} from '..actions/likeUser'

const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case LIKE_USER: 
    return 
        [...state.concat(action.payload)]
      default:
      return state
    }
  }
  
export default reducer