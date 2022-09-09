import { ADD_TODO, SET_TODOS, UPDATE_TODO } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_TODOS:
      return payload
    case ADD_TODO:
      return [...state, payload]
    case UPDATE_TODO:
      return [...state, payload.completed !== payload.completed] // potentially wrong, do we need to ...state?
    default:
      return state
  }
}

export default reducer

// state.map((wombat) => {
//  return wombat === payload.name ? payload.newName : wombat
// }
