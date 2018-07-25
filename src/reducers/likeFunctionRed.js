import {LIKE_USER} from '../actions/likeUser'
import {DISLIKE_USER} from '../actions/disLikeFunction'
import {MATCH_USER} from '../actions/matched'

const initialState = 
{ id: 11,
name: "Mandy",
age: 16,
description: "",
photo: "",
type: "",
liked: [],
disliked: [],
matched: []
}


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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