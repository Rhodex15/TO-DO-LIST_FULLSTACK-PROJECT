import Task from "../models/Task.js";

export async function createTask(req, res){
    try{
        const { title, description } = req.body;
        const newTask = await Task.create({
            title: title,
            description: description
        });
        console.log("Created task sucessfully")
        return res.status(201).json(newTask)
    }
    catch(error){
        console.error("Failed to create task:", error);
        if(error.name === "ValidationError"){
            return res.status(400).json("Failed to create task")
        }
        return res.status(500).json("Failed to create task")
    }    
};

export async function getTasks(req, res){
    try{
        const allTasks = await Task.find();
        console.log("Retrieved all tasks")
        return res.status(200).json(allTasks);
    }
    catch(error){
        console.error("Failed to get all tasks:", error);
        res.status(500).json("Failed to get all tasks");
    }
    
};

export async function getTaskById(req, res){
    try{
        const taskId = req.params.id;
        const retrieveTask = await Task.findById(taskId);
        if(!retrieveTask){
            return res.status(404).json("Task not found")
        }
        console.log("Retrieved task sucessfully");
        return res.status(200).json(retrieveTask);
    }
    catch(error){
        console.error("Failed to get task:", error);
        if(error.name === "CastError"){
            return res.status(400).json("Failed to retrieve task");
        }
        return res.status(500).json("Failed to retrieve task");
    }
};

export async function updateTask(req, res){
    try{
        const taskId = req.params.id;
        const { title, description, completed } = req.body;
        const updateData = {};
        if(Object.prototype.hasOwnProperty.call( req.body, "title")){
            updateData.title = title
        };
        if(Object.prototype.hasOwnProperty.call( req.body, "description")){
            updateData.description = description
        };
        if(Object.prototype.hasOwnProperty.call( req.body, "completed")){
            updateData.completed = completed
        };
        if(Object.keys(updateData).length === 0){
            return res.status(400).json("Please provide data to update");
        }
        const update = await Task.findByIdAndUpdate( taskId, updateData, { new: true, runValidators: true } );
        if(!update){
            return res.status(404).json("Task not found");
        }
        console.log("Updated task succesfully")
        return res.status(200).json(update);
    }
    catch(error){
        console.error("Failed to update task:", error);
        return res.status(500).json("Failed to update task");
    }
};

export async function deleteTask(req, res){
    try{
        const taskID = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(taskID);
        if(!deleteTask){
            console.log("Task not found")
            return res.status(404).json("Task was not found")
        };
        console.log("Task deleted sucessfully")
        res.status(200).json(deleteTask);
    }
    catch(error){
        console.error("Failed to delete task:", error);
        res.status(500).json(error)
    };
}
