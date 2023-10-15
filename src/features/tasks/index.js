import Form from "./TasksPage/Form";
import TaskList from "./TasksPage/TaskList/index";
import Buttons from "./TasksPage/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { ExampleTasksButton } from "../tasks/TasksPage/Buttons/styled";
import { fetchExampleTasks } from "./tasksSlice";
import { useDispatch } from "react-redux";
import { Container } from "../../common/Container/styled";
import { SearchContainer } from "../searchTask";


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
        title={"Wyszukaj zadanie"}
        body={<SearchContainer />}
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
