import {userData} from '../data/userData'

export const DISLIKED_USER = 'DISLIKED_USER'


export function dislike (disliked) {
    return {
        type: "DISLIKED_USER",
        payload: disliked
    }
}