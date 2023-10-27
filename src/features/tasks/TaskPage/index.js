import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { Container } from "../../../common/Container/styled";
import { Content } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Section
                title={`Szczegóły zadania: ${task ? task.content : "Nie znaleziono zadania"}`}
                body={!!task && (
                    <>
                        <Content>
                            <strong>Ukończono</strong>: {task.done ? "Tak" : "Nie"}
                        </Content>
                    </>
                )}
            >
            </Section>
        </Container>
    );
};


export default TaskPage;