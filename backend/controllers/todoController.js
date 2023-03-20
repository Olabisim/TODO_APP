
const {Todo} = require('../models/todo')

async function createTodo(req, res) {
        try {
                const {title, completed} = req.body;

                const todo = await Todo.create({title, completed})

                return res.status(201).json({status: true, message: "a todo created successfully", data: {todo}})

        }
        catch(err) {
                return res.status(500).json({status: false, message: "todo not created", data: {err}})
        }
}


async function retrieveTodo(_, res) {

        try {
                const allTodos = await Todo.findAll()

                return res.status(200).json({status: true, message: "todos data fetched", data: {todos: allTodos}})
        }
        catch(err) {
                return res.status(500).json({status: false, message: "message could not be retrieved", data: {err}})
        }

}


async function updateTodo(req, res) {
        try {
                const {id, title, completed} = req.body;

                const todo = Todo.findOne({while: {id}})

                todo.set({title, completed})

                return res.status(200).json({status: true, message: 'todo updated successfully'})

        }
        catch(err) {
                return res.status(500).json({status: false, message: "todo could not be updated", data: {err}})
        }
}

async function deleteTodo(req, res) {
        try {
                const {id} = req.params;
                console.log(id)

                const todo = Todo.Destroy({where: {id}})

                return res.status(200).json({status: true, message: 'todo deleted successfully', data: {todo}})

        }
        catch(err) {
                return res.status(500).json({status: false, message: "todo could not be delete", data: {err}})
        }

}


module.exports = {createTodo, retrieveTodo, updateTodo, deleteTodo}