import {
  selectAreTaskEmpty,
  toggleHideDone,
  selectHideDone,
  selectIsEveryTaskDone,
  setAllDone,
  fetchExampleTasks,
} from "../tasksSlice";
import { Button, StyledButtons } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
      >
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;