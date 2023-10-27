import { useDispatch, useSelector } from "react-redux";
import { selectLoading, fetchExampleTasks } from "../../tasksSlice";
import { ExampleTasksButton } from "../Buttons/styled";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <ExampleTasksButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading ? "Pobieranie..." : "Pobierz przykładowe zadania"
            }
        </ExampleTasksButton>
    );
};
