
const {Todo} = require('../models/todo')

async function createTodo(req, res) {
        try {
                const {title, completed} = req.body;

                const todo = await Todo.create({title, completed})

                res.status(201).json({status: true, message: "a todo created successfully", data: {todo}})

        }
        catch(err) {
                res.status(500).json({status: false, message: "todo not created", data: {err}})
        }
}


async function retrieveTodo(_, res) {

        try {
                const allTodos = await Todo.findAll()

                res.status(200).json({status: true, message: "todos data fetched", data: {todos: allTodos}})
        }
        catch(err) {
                res.status(500).json({status: false, message: "message could not be retrieved", data: {err}})
        }

}


module.exports = {createTodo, retrieveTodo}