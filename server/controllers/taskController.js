
import Task from "../models/Task.js";

export async function createTask(req, res) {
    try {
        const { title, description } = req.body;

        const newTask = await Task.create({
            title,
            description
        });

        return res.status(201).json(newTask);

    } catch (error) {
        console.error("Failed to create task:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Invalid task data",
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Failed to create task"
        });
    }
}

export async function getTasks(req, res) {
    try {
        const allTasks = await Task.find();

        return res.status(200).json(allTasks);

    } catch (error) {
        console.error("Failed to get all tasks:", error);

        return res.status(500).json({
            message: "Failed to retrieve tasks"
        });
    }
}

export async function getTaskById(req, res) {
    try {
        const taskId = req.params.id;

        const retrieveTask = await Task.findById(taskId);

        if (!retrieveTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json(retrieveTask);

    } catch (error) {
        console.error("Failed to get task:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid task ID"
            });
        }

        return res.status(500).json({
            message: "Failed to retrieve task"
        });
    }
}

export async function updateTask(req, res) {
    try {
        const taskId = req.params.id;
        const { title, description, completed } = req.body;

        const updateData = {};

        if (Object.prototype.hasOwnProperty.call(req.body, "title")) {
            updateData.title = title;
        }

        if (Object.prototype.hasOwnProperty.call(req.body, "description")) {
            updateData.description = description;
        }

        if (Object.prototype.hasOwnProperty.call(req.body, "completed")) {
            updateData.completed = completed;
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                message: "Please provide valid data to update"
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json(updatedTask);

    } catch (error) {
        console.error("Failed to update task:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid task ID"
            });
        }

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Invalid task data",
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Failed to update task"
        });
    }
}

export async function deleteTask(req, res) {
    try {
        const taskId = req.params.id;

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            task: deletedTask
        });

    } catch (error) {
        console.error("Failed to delete task:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid task ID"
            });
        }

        return res.status(500).json({
            message: "Failed to delete task"
        });
    }
}
