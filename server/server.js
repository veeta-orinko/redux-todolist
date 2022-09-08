const express = require('express')
const path = require('path')

const todoRoute = require('./routes/todoroute')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/todos', todoRoute)


module.exports = server
