import { SHOW_BUYER } from '../actions/showBuyer'



export default function (state = [], action = {}) {
    switch (action.type) {
      case  SHOW_BUYER :
      return  action.payload

    default:
      return state
    }
  }