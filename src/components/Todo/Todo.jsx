import { Li, Span, Button } from "../../styles/styles";

const Todo = ({ title, moveTaskToInProgress, id }) => {
  return (
    <Li>
      <Span>{title}</Span>
      <Button onClick={() => moveTaskToInProgress(id)}>In progress</Button>
    </Li>
  );
};

export default Todo;
