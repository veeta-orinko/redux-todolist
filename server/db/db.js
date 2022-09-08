const connection = require('./connection')

function getToDo(db = connection) {
  return db('todo').select()
}

//add todo
function addToDo(item, db = connection) {
  return db('todo').insert({ item: item, completed: false })
}

//delete todo
function delToDo(id, db = connection) {
  return db('todo').delete().where('id', id)
}

//update todo
function updateToDo(id, text, db = connection) {
  return db('todo').where('id', id).update({ item: text })
}

//update completion status?
function updateStatus(id, status, db = connection) {
  return db('todo').where('id', id).update({ completed: status })
}

module.exports = {
  updateStatus,
  delToDo,
  updateToDo,
  addToDo,
  getToDo,
}
