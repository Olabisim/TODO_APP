import express from 'express'
import { createTodo, getAllTodo } from '../controllers/todoController.js'


const router = express.Router()


router.post('/', createTodo)
router.get('/', getAllTodo)


export default router