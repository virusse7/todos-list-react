import "./style.css";
const Form = () => (
    <form className="form">
        <input autofocus className="form__newTaskInput newTask" placeholder="Co jest do zrobienia?" />
        <button className="button form__addTaskButton">Dodaj zadanie</button>
    </form>
);

export default Form;
