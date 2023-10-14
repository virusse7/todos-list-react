import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { ExampleTasksButton } from "./Buttons/styled";
import { fetchExampleTasks } from "./tasksSlice";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container/styled";


function Tasks() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton
          onClick={() => dispatch(fetchExampleTasks())}
        >
          Pobierz przykładowe zadania
        </ExampleTasksButton>}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default Tasks;
