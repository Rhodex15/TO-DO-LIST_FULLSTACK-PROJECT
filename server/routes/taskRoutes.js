import express from "express";
import { getTaskById, getTasks, createTask } from "../controllers/taskController.js";

const route = express.Router();

route.post("/", createTask);
route.get("/", getTasks);
route.get("/:id", getTaskById);

export default route;