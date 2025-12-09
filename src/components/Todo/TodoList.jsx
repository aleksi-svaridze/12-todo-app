import { Todo } from "./Todo";

export const TodoList = ({
  inputValue,
  onChange,
  addTodo,
  todoListData,
  makeTaskDone,
}) => {
  return (
    <>
      <form className="flex items-center my-4 gap-x-2">
        <input
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="bg-white outline-none py-1 px-2 text-sm rounded w-2/3"
        />
        <button
          onClick={(e) => addTodo(e)}
          type="submit"
          className="bg-white cursor-pointer shadow rounded text-sm py-1 px-2 w-1/3 font-medium"
        >
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-y-2">
        {todoListData.map((listItem) => (
          <Todo
            key={listItem.id}
            title={listItem.title}
            id={listItem.id}
            action={() => makeTaskDone(listItem.id)}
          />
        ))}
      </ul>
    </>
  );
};
