const connection = require('./connection')

function getFruits(db = connection) {
  return db('fruit').select()
}

//add todo
//delete todo
//update todo
//update completion status?

module.exports = {
  getFruits,
}
