import { useEffect, useRef } from "react";
import React from "react";
import Todo from "./Todo";

const TodoList = ({
  inputValue,
  onChange,
  addTodo,
  todoListData,
  makeTaskDone,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  console.log("Todo list component");
  return (
    <>
      <form className="flex flex-col sm:flex-row items-center my-4 gap-y-3 sm:gap-x-2">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="bg-white outline-none py-2 sm:py-1 px-2 text-sm rounded w-full sm:w-2/3"
        />
        <button
          onClick={(e) => addTodo(e)}
          type="submit"
          className="bg-white cursor-pointer shadow rounded text-sm py-1 px-2 w-full sm:w-1/3 font-medium"
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
            makeTaskDone={() => makeTaskDone(listItem.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default React.memo(TodoList);
