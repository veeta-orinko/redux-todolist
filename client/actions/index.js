import { addToDo, getToDos, updateToDo } from '../apis/toDo'
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODOS'
export const UPDATE_TODO = 'UPDATE_TODOS'

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
    ///ask for data from database (by asking apiclient to get it)
    return getToDos().then((todos) => {
      //call funciton on line 5 to update the global state
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

export function updateCompletion(id) {
  return (dispatch) => {
    return updateToDo(id).then((id) => {
      dispatch(updateItem(id))
    })
  }
}

export function updateItem(id) {
  return {
    type: UPDATE_TODO,
    payload: id,
  }
}

//create action here update the completed status action
//create the simple state fucntion above
//create reducer
//create apiclient function
//dispatch in list componet
