import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // GET: Fetch tasks from backend when app loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tasks");

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // PATCH: Toggle task completion
  const Toggle = async (id) => {
    const task = tasks.find(task => task._id === id);

    if (!task) return;

    const updatedCompleted = !task.completed;

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          completed: updatedCompleted
        })
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();

      setTasks(previousTasks =>
        previousTasks.map(task =>
          task._id === id ? updatedTask : task
        )
      );
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  };

  // POST: Create a new task
  const addTask = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title.trim()
        })
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const newTask = await response.json();

      setTasks(previousTasks => [...previousTasks, newTask]);
      setTitle("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      setTasks(previousTasks =>
        previousTasks.filter(task => task._id !== id)
      );

    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-purple-600">To do List App</h1>

      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Enter a task..."
        />

        <button type="submit">Create Task</button>
      </form>

      {tasks.map(task => (
        <TaskItem
          key={task._id}
          title={task.title}
          completed={task.completed}
          toggle={() => Toggle(task._id)}
          onDelete={() => deleteTask(task._id)}
        />
      ))}
    </>
  );
}

export default App;
