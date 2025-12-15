import React from "react";
import Done from "./Done";

const DoneTasksList = ({ doneTasksList, makeTaskActive, removeTask }) => {
  console.log("Done task component");
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

export default React.memo(DoneTasksList);
