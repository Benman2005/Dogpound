import {sellers} from '../data/userData'
export const SHOW_BUYER = 'SHOW_BUYER'
export const SHOW_SELLER = 'SHOW_SELLER'

var i = -1;

export function showSeller() {
  function increment(n){
    if (i === sellers.length-1){
      window.alert("STOP! No more doggies left..")
    }
    if (n<sellers.length-1) {
    n++
    return n
    }
   else 
    return (n=sellers.length-1
    )
  }
  i = increment(i)

  if (i === sellers.length-1){
    return {
      type: SHOW_SELLER,
      payload: sellers[i]
    }  
  }
  else return {
      type: SHOW_SELLER,
      payload: sellers[i]
    }  
  }