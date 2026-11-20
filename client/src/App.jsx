import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

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
  const filteredTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });


  return (
    <div className="min-h-screen bg-[#F8F7FC] px-5 py-10 text-[#27243A]">
      <div className="mx-auto max-w-2xl">

        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight">
            TO DO LIST<span className="text-violet-600">.</span>
          </h1>

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            My workspace
          </span>
        </header>


        <section className="mb-8 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-500 p-8 text-white shadow-lg shadow-violet-100">
          <p className="mb-2 text-sm font-medium text-violet-100">
            YOUR PRODUCTIVITY SPACE
          </p>

          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Make today count.
          </h2>

          <p className="text-sm text-violet-100">
            Small steps. Big progress.
          </p>
        </section>

        <form onSubmit={addTask} className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <label className="mb-3 block font-semibold">
            Create a task
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="What needs to get done?"
              className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />

            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700 active:scale-[0.98]"
            >
              + Add task
            </button>
          </div>
        </form>

        <div className="mb-5 flex gap-2">
          {["all", "pending", "completed"].map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition ${filter === option
                  ? "bg-violet-600 text-white shadow-sm"
                  : "bg-white text-gray-500 hover:bg-violet-50"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.map(task => (
            <TaskItem
              key={task._id}
              title={task.title}
              completed={task.completed}
              toggle={() => Toggle(task._id)}
              onDelete={() => deleteTask(task._id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
