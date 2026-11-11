import express from "express";
import { createTask } from "../controllers/taskController.js";
import { getTasks } from "../controllers/taskController.js";

const route = express.Router();

route.post("/", createTask);
route.get("/", getTasks);

export default route;