import Task from "../models/Task.js";

export async function createTask(req, res){
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
        res.status(500).json("Failed to create task")
        
    }    
}

export async function getTasks(req, res){
    try{
        const allTasks = await Task.find();
        return res.status(200).json(allTasks);
    }
    catch(error){
        console.error("Failed to get all tasks:", error);
        res.status(500).json("Failed to get all tasks");
    }
    
}

