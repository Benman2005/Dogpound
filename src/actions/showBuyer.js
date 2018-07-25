
import {buyers} from '../data/userData'

export const SHOW_BUYER = 'SHOW_BUYER'


export function showBuyer() {
    return {
      type: SHOW_BUYER,
      payload: buyers[Math.floor(Math.random() * buyers.length)]

    }
  }