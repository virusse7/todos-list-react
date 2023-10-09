import { List, Button, Item, Content } from "./styled";

const TaskList = ({ hideDone, tasks, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          done
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          onClick={() => removeTask(task.id)}
          remove
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TaskList;