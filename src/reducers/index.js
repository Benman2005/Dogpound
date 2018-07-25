import { combineReducers } from 'redux'
import showSeller from './showSellerRed'
import showBuyer from './showBuyerRed'
import likeFunction from './likeFunctionRed'

export default combineReducers({
  showSeller,
  showBuyer,
  likeFunction
})