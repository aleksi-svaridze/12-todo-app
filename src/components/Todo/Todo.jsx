export const Todo = ({ title, done }) => {
  return (
    <li>
      {title} - <button>{done ? "Done" : "In progress"}</button>
    </li>
  );
};
