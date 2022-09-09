import React from 'react'
import Form from './Form'
import ListItem from './ListItem'

// this is the cute emoji stuff ///

// import { cursoreffects } from 'cursor-effects'
// new cursoreffects.fairyDustCursor({ colors: ['#ff0000', '#00ff00', '#0000ff'] })

function App() {
  return (
    <>
      <div className="app">
        <h1>To do list</h1>
        <ListItem />
        <Form />
      </div>
    </>
  )
}

export default App
