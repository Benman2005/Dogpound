export const SELECT_USER = 'SELECT_USER'

export function selectUser(id) {
    return {
      type: SELECT_USER,
      payload: id
    }
  } 