import {DISLIKED_USER} from '..actions/likeFunction'

const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case "DISLIKED_USER": 
    return 
        [...state.concat(disliked)]
      default:
      return state
    }
  }
  
  export default reducer