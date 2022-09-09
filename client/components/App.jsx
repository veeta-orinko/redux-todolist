import React from 'react'
import Form from './Form'
import ListItem from './ListItem'

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
