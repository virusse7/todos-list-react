import Form from "./TasksPage/Form";
import TaskList from "./TasksPage/TaskList/index";
import Buttons from "./TasksPage/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import FetchExampleTasksButton from "./TasksPage/FetchExampleTasksButton";
import { Container } from "../../common/Container/styled";
import { SearchContainer } from "../searchTask";

function TasksPage() {
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton>
          Pobierz przykładowe zadania
        </FetchExampleTasksButton>}
        body={<Form />}
      />
      <Section
        title={"Wprowadź zadanie do wyszukania"}
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

export default TasksPage;
