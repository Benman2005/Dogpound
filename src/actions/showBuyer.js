
import {buyers} from '../data/userData'


export const SHOW_BUYER = 'SHOW_BUYER'
export const SHOW_SELLER = 'SHOW_SELLER'

var i = -1;

export function showBuyer() {
  function increment(n){
    if (i === buyers.length-1){
      window.alert("STOP! No more Dog lovers left..")
    }
    if (n<buyers.length-1) {
    n++
    return n
    }
   else 
    return (n=buyers.length-1
    )
  }
  i = increment(i)

  if (i === buyers.length-1){
    return {
      type: SHOW_BUYER,
      payload: buyers[i]
    }  
  }
  else return {
      type: SHOW_BUYER,
      payload: buyers[i]
    }  
  }