// import {userData} from '../data/userData'
import {buyers} from '../data/userData'

export const SHOW_USER = 'SHOW_USER'

console.log(buyers)

export function showUser() {
    return {
      type: SHOW_USER,
      payload: buyers[Math.floor(Math.random() * buyers.length)]

    }
  }