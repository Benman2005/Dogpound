import { SHOW_BUYER } from '../actions/showBuyer'

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
      case  SHOW_BUYER :
      return  action.payload

    default:
      return state
    }
  }