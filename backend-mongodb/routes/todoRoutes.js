import express from 'express'
import { createTodo, deleteTodo, getAllTodo, UpdateTodo } from '../controllers/todoController.js'


const router = express.Router()


router.post('/', createTodo)
router.get('/', getAllTodo)
router.patch('/:id', UpdateTodo)
router.delete('/:id', deleteTodo)


export default router