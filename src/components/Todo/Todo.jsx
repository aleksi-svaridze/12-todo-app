import React from "react";

const Todo = ({ title, makeTaskDone, id }) => {
  console.log("Todo Component");
  return (
    <li className="border px-4 py-2 flex items-center gap-x-2 justify-between rounded">
      <span className="capitalize text-sm overflow-hidden">{title}</span>
      <button
        onClick={() => makeTaskDone(id)}
        className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
      >
        Done
      </button>
    </li>
  );
};

export default React.memo(Todo);
