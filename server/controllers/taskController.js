import Task from "../models/Task.js";

async function createTask(req, res){
    try{
        const { title, description } = req.body;
        const newTask = await Task.create({
            title: title,
            description: description
        });
        return res.status(201).json(newTask)
    }
    catch(error){
        console.error("Failed to create task:", error);
        // res.status(500).json("Failed to create task")
        next(error);
    }    
}

export default createTask;