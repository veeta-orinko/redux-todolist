import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToDos } from '../actions'


import Form from './Form'

// //// this is the cute emoji stuff ///

// import { cursoreffects } from 'cursor-effects'
// new cursoreffects.fairyDustCursor({ colors: ['#ff0000', '#00ff00', '#0000ff'] })

function App() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchToDos())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.item}</li>
            // component: todo list (includes rendering a delete button, linethrough action)
            // component: adding list (form)
            // checkbox stored in a state (when checked = true perform an action(update database + checkbox))
          ))}
        </ul>
        <Form />
      </div>
    </>
  )
}

export default App
