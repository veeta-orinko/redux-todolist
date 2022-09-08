const express = require('express')

const db = require('../db/todo')

const router = express.Router()

/// reading the list of items to do
//adding /// potentially innacurate??? yolo!!! soz!!!!! we try
router.get('/', (req, res) => {
  db.getToDo()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//add a new todo item to database
router.post('/', (req, res) => {
  const todoData = req.body
  db.addToDo(todoData)
    .then((ids) => {
      const newToDoId = ids[0]

      res.json({ ...todoData, id: newToDoId })
    })

    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

//deleting

//updating item text only

//updating completion only

module.exports = router
