
const express = require('express')
const todoController = require('../controllers/todoController')

const router = express.Router()

router.post('/todos', todoController.createTodo)
router.get('/todos', todoController.retrieveTodo)
router.post('/todos/update', todoController.updateTodo)
router.delete('/todos/delete/:id', todoController.deleteTodo)


module.exports = router