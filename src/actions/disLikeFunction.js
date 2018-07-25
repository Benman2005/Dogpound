export const DISLIKE_USER = 'DISLIKE_USER'


export function dislikeUser (disliked) {
    return {
        type: DISLIKE_USER,
        payload: disliked
    }
} 