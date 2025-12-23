import Done from "./Done";

const DoneTasksList = ({ doneTasksList, makeTaskActive, removeTask }) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
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

export default DoneTasksList;
