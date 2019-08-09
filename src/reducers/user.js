export const SET_NAME = 'SET_NAME'

export default function user(state='anonym', action={}) {
  switch (action.type) {
    case SET_NAME:
      return action.payload
  default:
    return state    
  }
 }