export const NEW_USER = 'NEW_USER'

export function newUser(name, age, description, type) {
    return {
      type: NEW_USER,
      payload: {
          name,
          age,
          description,
          type,
          liked: [],
          disliked: [],
          matched: []
      }
    }
}