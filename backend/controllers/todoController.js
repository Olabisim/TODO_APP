
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


module.exports = {createTodo}