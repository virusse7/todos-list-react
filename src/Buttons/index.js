import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="list__renderButtons">
    {tasks.length > 0 && (
      <>
        <button className="renderButtons">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="renderButtons"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;