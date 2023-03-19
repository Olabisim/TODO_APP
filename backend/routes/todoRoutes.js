
const express = require('express')
const todoController = require('../controllers/todoController')

const router = express.Router()

router.post('/todos', todoController.createTodo)
router.get('/todos', todoController.retrieveTodo)


module.exports = router