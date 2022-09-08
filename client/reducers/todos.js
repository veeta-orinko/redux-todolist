import { ADD_TODO, SET_TODOS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_TODOS:
      return payload
    case ADD_TODO:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
