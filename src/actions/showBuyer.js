
import {buyers} from '../data/userData'

export const SHOW_BUYER = 'SHOW_BUYER'

const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)]

export function showBuyer() {
    return {
      type: SHOW_BUYER,
      payload: randomBuyer

    }
  }