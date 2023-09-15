import "./style.css";
const Tasks = ({ hideDone, tasks, removeTask, toggleTaskDone }) => (
  <ul className="list__tasks">
    {tasks.map(task => (
      <li
        className={
          `
          list__item ${task.done && hideDone ? "list__button--hidden" : ""}
          `}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button list__button--done"
        >
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__text${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;