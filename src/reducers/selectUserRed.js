import { SELECT_USER } from '../actions/selectUser'

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
      case  SELECT_USER :
      return  action.payload

    default:
      return state
    }
  }