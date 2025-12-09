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
          className="bg-white outline-none py-1 px-2 text-sm rounded"
        />
        <button
          onClick={(e) => addTodo(e)}
          type="submit"
          className="bg-white cursor-pointer shadow rounded text-sm py-1 px-2 w-full font-medium"
        >
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-y-2">
        {todoListData &&
          todoListData.map((listItem) => (
            <Todo
              key={listItem.id}
              title={listItem.title}
              done={listItem.done}
              id={listItem.id}
              action={() => makeTaskDone(listItem.done, listItem.id)}
            />
          ))}
      </ul>
    </>
  );
};
