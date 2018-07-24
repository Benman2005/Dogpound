import { combineReducers } from 'redux'
import currentUser from './currentUser'
import showBuyer from './showBuyer'
import likeFunction from './likeFunction'

export default combineReducers({
  currentUser,
  showBuyer,
  likeFunction
})