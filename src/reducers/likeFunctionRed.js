import {LIKE_USER} from '../actions/likeUser'
import {DISLIKE_USER} from '../actions/disLikeFunction'
import {MATCH_USER} from '../actions/matched'
import {NEW_USER} from '../actions/newUser'

const initialState = {
  
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_USER:
      return action.payload
      
    case LIKE_USER: 
      return {
    ...state, 
      liked: [...state.liked, action.payload]
    } 
  
    case DISLIKE_USER: 
    return {
      ...state,
      disliked: [...state.disliked, action.payload ]
    }
    case MATCH_USER:
    return {
      ...state,
      matched: [...state.matched, action.payload]
    }
        default:
        return state
    } 
    
  }
  
export default reducer