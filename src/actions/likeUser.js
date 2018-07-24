export const LIKE_USER = 'LIKE_USER'

export function likeUser(liked) {
    return {
      type: LIKE_USER,
      payload: liked

    }
  }