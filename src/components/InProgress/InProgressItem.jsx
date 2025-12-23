import randomColor from "randomcolor";
import { useState } from "react";

const InProgressItem = ({ id, title, moveTaskToDone, moveTaskToBacklog }) => {
  const [theme] = useState(randomColor());

  return (
    <li
      style={{ borderColor: theme }}
      className="border border-l-4 px-4 py-3 flex items-center gap-x-2 justify-between rounded"
    >
      <span className="capitalize text-sm overflow-hidden">{title}</span>
      <div className="flex items-center gap-x-2">
        <button
          onClick={() => moveTaskToBacklog(id)}
          className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
        >
          Backlog
        </button>
        <button
          onClick={() => moveTaskToDone(id)}
          className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
        >
          Done
        </button>
      </div>
    </li>
  );
};

export default InProgressItem;
