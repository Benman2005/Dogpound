import {LIKE_USER} from '../actions/likeUser'
import {DISLIKE_USER} from '../actions/disLikeFunction'
import {MATCH_USER} from '../actions/matched'
import {NEW_USER} from '../actions/newUser'


const buyerIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sellerIds = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const initialState = { }

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...action.payload,
        id: action.payload.type === 'buyer'
          ? buyerIds[Math.floor(Math.random() * buyerIds.length)]
          : sellerIds[Math.floor(Math.random() * sellerIds.length)]
      }
      
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