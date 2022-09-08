import { getToDos } from '../apis/todos'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchToDos() {
  return (dispatch) => {
    return getToDos().then((todos) => {
      dispatch(setFruits(todos))
    })
  }
}
