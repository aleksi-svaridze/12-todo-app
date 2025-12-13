export const Todo = ({ title, action, id }) => {
  console.log("Todo Component");
  return (
    <li className="border px-4 py-2 flex items-center justify-between rounded">
      <span className="capitalize text-sm">{title}</span>
      <button
        onClick={() => action(id)}
        className="bg-white shadow px-2 py-1 rounded text-xs cursor-pointer"
      >
        Done
      </button>
    </li>
  );
};
