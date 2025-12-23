const InProgressItem = ({ id, title, moveTaskToDone, moveTaskToBacklog }) => {
  return (
    <li className="border border-[#B97E6D] border-l-4 px-4 py-3 flex items-center gap-x-2 justify-between rounded">
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
