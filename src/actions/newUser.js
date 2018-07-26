export const NEW_USER = 'NEW_USER'
export const ASSIGN_ID = 'ASSIGN_ID'





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
          matched: [],
        
      }
    }
}