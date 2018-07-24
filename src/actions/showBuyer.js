import {userData} from '../data/userData'

export const SHOW_BUYER = 'SHOW_BUYER'


export function showBuyer() {
  return {
    type: SHOW_BUYER,
    payload: userData[1]
  }
}