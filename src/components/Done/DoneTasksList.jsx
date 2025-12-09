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
          id={listItem.id}
          makeTaskActive={() => makeTaskActive(listItem.id)}
          removeTask={() => removeTask(listItem.id)}
        />
      ))}
    </ul>
  );
};
