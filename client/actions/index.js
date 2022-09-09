import { getToDos } from '../apis/todos'

export const SET_TODOS = 'SET_TODOS'

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos,
  }
}
//from app.jsx: dispatch(fetchToDos())

//What is happening?
export function fetchToDos() {
  return (dispatch) => {
    return getToDos().then((todos) => {
      dispatch(setTodos(todos))
    })
  }
}
