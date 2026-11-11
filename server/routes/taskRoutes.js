import express from "express";
import createTask from "../controllers/taskController.js";

const route = express.Router();

route.post("/", createTask);

export default route;