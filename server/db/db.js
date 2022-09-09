const connection = require('./connection')

//reading todo list
function getToDo(db = connection) {
  return db('todo').select()
}

//reading one todo from list by id
function getToDoById(id, db = connection) {
  return db('todo').select().where('id', id).first()
}

//add todo
function addToDo(item, db = connection) {
  console.log('add')
  return db('todo').insert(item)
}

//delete todo
function delToDo(id, db = connection) {
  return db('todo').delete().where('id', id)
}

//update todo
// function updateToDo(id, text, db = connection) {
//   return db('todo').where('id', id).update({ item: text })
// }

//update completion status?
function updateStatus(obj, db = connection) {
  console.log('update')
  console.log(obj)
  return db('todo')
    .where('id', obj.id)
    .update({ completed: obj.completed !== obj.completed })
}

module.exports = {
  updateStatus,
  delToDo,
  addToDo,
  getToDo,
  getToDoById,
}
