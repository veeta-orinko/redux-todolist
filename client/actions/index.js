import { addToDo, getToDos } from '../apis/toDo'
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'

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

export function addItem(item) {
  return {
    type: ADD_TODO,
    payload: item,
  }
}

export function fetchToDo(item) {
  return (dispatch) => {
    return addToDo(item).then((item) => {
      dispatch(addItem(item))
    })
  }
}
