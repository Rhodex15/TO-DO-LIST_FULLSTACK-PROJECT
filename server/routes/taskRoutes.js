import express from "express";
import { getTaskById, getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";

const route = express.Router();

route.post("/", createTask);
route.get("/", getTasks);
route.get("/:id", getTaskById);
route.patch("/:id", updateTask);
route.delete("/:id", deleteTask);

export default route;