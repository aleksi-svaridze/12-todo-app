import React from "react";

const Done = ({ id, title, removeTask, makeTaskActive }) => {
  console.log("Done Component");
  return (
    <li className="border border-[#B97E6D] border-l-4 px-4 py-3 flex items-center gap-x-2 justify-between rounded">
      <span className="capitalize text-sm overflow-hidden">{title}</span>
      <div className="flex items-center gap-x-2">
        <button
          onClick={() => removeTask(id)}
          className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
        >
          Delete
        </button>
        <button
          onClick={() => makeTaskActive(id)}
          className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
        >
          Undo
        </button>
      </div>
    </li>
  );
};

export default React.memo(Done);
