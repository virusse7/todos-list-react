import "./style.css"
const Tasks = ({ hideDone, tasks }) => (
  <ul className="list__tasks tasks">
    {tasks.map(task => (
      <li
        className={`list__item ${task.done && hideDone ? "list__button--hidden" : ""}`}
      >
        <button className="list__button list__button--done">
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__text${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;