
function TaskItem(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.completed ? "Completed" : "Pending"}</p>

      <button onClick={props.toggle}>
        Toggle
      </button>

      <button onClick={props.onDelete}>
        Delete
      </button>
    </>
  );
}

export default TaskItem;
