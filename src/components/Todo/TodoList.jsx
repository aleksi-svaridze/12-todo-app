import Todo from "./Todo";
import { Ul } from "../../styles/styles";

const TodoList = ({ todoList, moveTaskToInProgress }) => {
  return (
    <Ul>
      {todoList.map((listItem) => (
        <Todo
          key={listItem.id}
          title={listItem.title}
          id={listItem.id}
          moveTaskToInProgress={() => moveTaskToInProgress(listItem.id)}
        />
      ))}
    </Ul>
  );
};

export default TodoList;
