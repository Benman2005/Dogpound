import {sellers} from '../data/userData'

export const SHOW_BUYER = 'SHOW_BUYER'

//Because I am a buyer, I want to see photos of Dogs that are for sale

export function showBuyer() {
  return {
    type: SHOW_BUYER,
    payload: sellers[Math.floor(Math.random() * sellers.length)]  }
}