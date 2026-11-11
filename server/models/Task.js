import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 120
    },
    description: {
        type: String,
        maxlength: 1000
    },
    completed: {
        type: Boolean,
        default: false
    },

},
    { timestamps: true })

const Task = mongoose.model("Task", taskSchema)

export default Task;