import { Li, Span, Button } from "../../styles/styles";
import randomColor from "randomcolor";
import { useState } from "react";

const Todo = ({ title, moveTaskToInProgress, id }) => {
  const [theme] = useState(randomColor());

  return (
    <Li theme={theme}>
      <Span>{title}</Span>
      <Button onClick={() => moveTaskToInProgress(id)}>In progress</Button>
    </Li>
  );
};

export default Todo;
