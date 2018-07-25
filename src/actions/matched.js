export const MATCH_USER = 'MATCH_USER'

export function setMatches(liked) {
    return {
      type: MATCH_USER,
      payload: liked
    }
  } 

