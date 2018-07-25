import {sellers} from '../data/userData'

export const SHOW_SELLER = 'SHOW_SELLER'

//Because I am a buyer, I want to see photos of Dogs that are for sale

export function showSeller() {
  return {
    type: SHOW_SELLER,
    payload: sellers[Math.floor(Math.random() * sellers.length)]  }
}