import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
      
        title: {
                type: String,
                required: [true, 'Please add a title!'],
        },
        completed: {
                type: String,
                default: 'false'
        }
});


export default mongoose.model('Todo', todoSchema);
