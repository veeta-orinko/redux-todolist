import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToDos, updateCompletion } from '../actions'

import { fairyDustCursor } from 'cursor-effects'

new fairyDustCursor()

const ListItem = () => {
  //global variable
  const todos = useSelector((state) => state.todos)

  //fetch the todo list??
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchToDos())
  }, [])

  function onClickHandler(e) {
    let id = e.target.value
    console.log('button click')
    dispatch(updateCompletion(id))
  }

  console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <>
          {todo.completed == 1 && (
            <div key={todo.id}>
              <s>{todo.item}</s>
              <button onClick={onClickHandler}>Not Complete</button>
            </div>
          )}
          {todo.completed == 0 && (
            <div key={todo.id}>
              {todo.item}
              <button value={todo.id} onClick={onClickHandler}>
                Mark Complete
              </button>
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default ListItem
