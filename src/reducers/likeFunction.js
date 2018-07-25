import {LIKE_USER} from '../actions/likeUser'
import {DISLIKE_USER} from '../actions/disLikeFunction'




const initialState = { liked: [], disliked: [] } 


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case LIKE_USER: 
    return { 
    ...state, 
      liked: [...state.liked, action.payload]
    }
      // case DISLIKE_USER: 
      // return [...state, action.payload, disliked[action.payload]]

        default:
        return state
      
    } 
  }
  
export default reducer