import express from "express";
import { getTaskById, getTasks, createTask, updateTask } from "../controllers/taskController.js";

const route = express.Router();

route.post("/", createTask);
route.get("/", getTasks);
route.get("/:id", getTaskById);
route.patch("/:id", updateTask);

export default route;