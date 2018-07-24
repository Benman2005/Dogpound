export const DISLIKE_USER = 'DISLIKE_USER'


export function dislike (disliked) {
    return {
        type: DISLIKE_USER,
        payload: disliked
    }
}