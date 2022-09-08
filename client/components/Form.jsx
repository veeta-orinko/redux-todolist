import React from 'react'
import { fetchToDo } from '../actions/index.js'
import { useDispatch } from 'react-redux'

const Form = () => {
  const dispatch = useDispatch()

  function addItem(e) {
    if (e.keyCode === 13) {
      dispatch(fetchToDo(e.target.value))
      e.target.value = ''
    }
  }
  return (
    <>
      <input placeholder="enter your item" onKeyUp={addItem} />
    </>
  )
}

export default Form

// id, item(str), completed(bool)
