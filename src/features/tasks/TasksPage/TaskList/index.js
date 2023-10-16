import { useSelector, useDispatch } from "react-redux";
import { List, Button, Item, Content, StyledLink } from "./styled";
import { removeTask, toggleTaskDone, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();


  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            done
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;