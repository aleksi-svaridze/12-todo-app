import InProgressItem from "./InProgressItem";

const InProgressList = ({
  inProgressList,
  moveTaskToBacklog,
  moveTaskToDone,
}) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
      {inProgressList.map((listItem) => (
        <InProgressItem
          key={listItem.id}
          title={listItem.title}
          id={listItem.id}
          moveTaskToBacklog={() => moveTaskToBacklog(listItem.id)}
          moveTaskToDone={() => moveTaskToDone(listItem.id)}
        />
      ))}
    </ul>
  );
};

export default InProgressList;
