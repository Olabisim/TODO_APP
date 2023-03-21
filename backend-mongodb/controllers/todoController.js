import Todo from "../models/Todo.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";


export const createTodo = catchAsync(async (req, res, next) => {
          console.log('here1');
        
        const { title, completed } = req.body;
      
        if (!title || !completed) {
                next(new AppError('title & completed required', 400));
        }

        const newTodo = await Todo.create({
                title,
                completed
        });
      
        res.status(201).json({
                status: 'success',
                data: {
                        newTodo,
                },
        });
});

export const getAllTodo = catchAsync(async (req, res, next) => {
          console.log('here1');
        

        const newTodo = await Todo.find({});

        if(!newTodo) return res.status(404).json({status: false, message: "cannot find todo"})
      
        res.status(200).json({
                status: 'success',
                data: {
                        newTodo,
                },
        });
});