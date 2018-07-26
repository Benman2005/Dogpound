export const NEW_USER = 'NEW_USER'

const buyerIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sellerIds = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export function assignId(user) {
    if (user.payload.type == 'buyer') return {
        id: buyerIds[Math.floor(Math.random() * buyerIds.length)]
    }
    else if (user.payload.type == 'seller') return {
        id: sellerIds[Math.floor(Math.random() * sellerIds.length)]
    }
}


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
        //   id: assignId()
      }
    }
}