import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="list__renderButtons">
    {tasks.length > 0 && (
      <>
        <button className="renderButtons">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
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