export const NEW_USER = 'NEW_USER'

export function newUser(name) {
    return {
      type: NEW_USER,
      payload: {
        name: name }
        //   age: age,
        //   description: description

      }
}