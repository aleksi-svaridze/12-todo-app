import { Done } from "./Done";

export const DoneTasksList = ({
  doneTasksList,
  makeTaskActive,
  removeTask,
}) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {doneTasksList.map((listItem) => (
        <Done
          key={listItem.id}
          title={listItem.title}
          done={listItem.done}
          id={listItem.id}
          action={() => makeTaskActive(listItem.done)}
          removeTask={() => removeTask(listItem.id)}
        />
      ))}
    </ul>
  );
};
