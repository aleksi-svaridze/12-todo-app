import TodoList from "./components/Todo/TodoList";
import DoneTasksList from "./components/Done/DoneTasksList";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useState } from "react";
import { InProgressList } from "./components/InProgress/InProgressList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoListData, setTodoListData] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneTasksList, setDoneTasksList] = useState([]);

  const onChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();

      const todo = {
        id: uuidv4(),
        title: inputValue,
      };

      if (inputValue.trim().length > 0) {
        setTodoListData((prevState) => [...prevState, todo]);
        setInputValue("");
      } else {
        alert("Enter task");
      }
      setTodoListCounter((prevState) => prevState++);
    },
    [inputValue]
  );

  const makeTaskDone = useCallback(
    (id) => {
      let taskObj;
      todoListData.filter((task) => {
        if (task.id === id) {
          taskObj = {
            id: task.id,
            title: task.title,
          };
        }
      });

      setTodoListData((prevState) =>
        prevState.filter((task) => task.id !== id)
      );
      setDoneTasksList((prevState) => [...prevState, taskObj]);
    },
    [todoListData]
  );

  const removeTask = useCallback((id) => {
    setDoneTasksList((prevState) => prevState.filter((task) => task.id !== id));
  }, []);

  const makeTaskActive = useCallback(
    (id) => {
      let taskObj;
      doneTasksList.filter((task) => {
        if (task.id === id) {
          taskObj = {
            id: task.id,
            title: task.title,
          };
        }
      });

      setTodoListData((prevState) => [...prevState, taskObj]);
      setDoneTasksList((prevState) =>
        prevState.filter((task) => task.id !== id)
      );
    },
    [doneTasksList]
  );

  return (
    <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-1 justify-between my-10">
      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-3 text-[#515151] border-b-2 border-b-[#B97E6D] flex items-center gap-x-2">
          Backlog
          <span className="border-l-2 border-[#D9D9D9] pl-2 h-4 leading-3.5 -mb-1.5">
            {todoListData.length}
          </span>
        </h2>
        <TodoList
          inputValue={inputValue}
          onChange={onChange}
          addTodo={addTodo}
          todoListData={todoListData}
          makeTaskDone={makeTaskDone}
        />
      </section>

      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-3 text-[#515151] border-b-2 border-b-[#E1D17F] flex items-center gap-x-2">
          in progress
          <span className="border-l-2 border-[#D9D9D9] pl-2 h-4 leading-3.5 -mb-1.5">
            {inProgressList.length}
          </span>
        </h2>
        <InProgressList />
      </section>

      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-3 text-[#515151] border-b-2 border-b-[#B4CD93] flex items-center gap-x-2">
          done
          <span className="border-l-2 border-[#D9D9D9] pl-2 h-4 leading-3.5 -mb-1.5">
            {doneTasksList.length}
          </span>
        </h2>
        <DoneTasksList
          doneTasksList={doneTasksList}
          makeTaskActive={makeTaskActive}
          removeTask={removeTask}
        />
      </section>
    </div>
  );
};

export default App;
