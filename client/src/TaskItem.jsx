function TaskItem({ title, completed, toggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">

      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={toggle}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
            completed
              ? "border-violet-600 bg-violet-600 text-white"
              : "border-gray-300 hover:border-violet-500"
          }`}
          aria-label="Toggle task completion"
        >
          {completed && "✓"}
        </button>

        <span
          className={`break-words font-medium ${
            completed
              ? "text-gray-400 line-through"
              : "text-gray-700"
          }`}
        >
          {title}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            completed
              ? "bg-green-50 text-green-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </span>

        <button
          onClick={onDelete}
          className="rounded-lg px-2 py-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
