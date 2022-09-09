import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToDos } from '../actions'

const ListItem = () => {
  //global variable
  const todos = useSelector((state) => state.todos)

  //fetch the todo list??
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchToDos())
  }, [])

  function onClickHandler() {
    console.log('button click')
    //dispatch to change globl state of completed/db update
  }

  console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <>
          {todo.completed == 1 && (
            <div key={todo.id}>
              <h3>
                <s>{todo.item}</s>
              </h3>
              <button onClick={onClickHandler}>Not Complete</button>
            </div>
          )}
          {todo.completed == 0 && (
            <div key={todo.id}>
              <h3>{todo.item}</h3>
              <button onClick={onClickHandler}>Mark Complete</button>
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default ListItem
