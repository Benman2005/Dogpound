export const NEW_USER = 'NEW_USER'

export function newUser(name, age, description) {
    return {
      type: NEW_USER,
      payload: {
          name,
          age,
          description,
          liked: [],
          disliked: [],
          matched: []
      }
    }
}