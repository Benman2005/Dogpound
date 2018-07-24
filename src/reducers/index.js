import { combineReducers } from 'redux'
import currentUser from './currentUser'
import showBuyer from './showBuyer'

export default combineReducers({
  currentUser,
  showBuyer
})