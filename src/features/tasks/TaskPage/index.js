import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Section
            title={task ? task.content : "Nie znaleziono zadania"}
            body={<><strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}</>}
        >

        </Section>
    )
}


export default TaskPage;