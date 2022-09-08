import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFruits } from '../actions'

//// this is the cute emoji stuff ///
import { cursoreffects } from 'cursor-effects'
new cursoreffects.fairyDustCursor({ colors: ['#ff0000', '#00ff00', '#0000ff'] })

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
            // component: todo list (includes rendering a delete button, linethrough action)
            // component: adding list (form)
            // checkbox stored in a state (when checked = true perform an action(update database + checkbox))
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
