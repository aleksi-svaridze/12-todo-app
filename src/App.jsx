import TodoList from "./components/Todo/TodoList";
import DoneTasksList from "./components/Done/DoneTasksList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import InProgressList from "./components/InProgress/InProgressList";
import { Form } from "./components/form/Form";

const App = () => {
  // const [theme, setTheme] = useState(["green", "red", "blue", "yellow"]);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneTasksList, setDoneTasksList] = useState([]);

  const onChange = (value) => {
    setInputValue(value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      title: inputValue,
    };

    if (inputValue.trim().length > 0) {
      setTodoList((prevState) => [...prevState, todo]);
      setInputValue("");
    } else {
      alert("Enter task");
    }
  };

  const removeTask = (id) => {
    setDoneTasksList((prevState) => prevState.filter((task) => task.id !== id));
  };

  const moveTaskToInProgress = (id) => {
    let taskObj;
    todoList.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });
    setTodoList((prevState) => prevState.filter((task) => task.id !== id));
    setInProgressList((prevState) => [...prevState, taskObj]);
  };

  const moveTaskToBacklog = (id) => {
    let taskObj;
    inProgressList.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });

    setTodoList((prevState) => [...prevState, taskObj]);
    setInProgressList((prevState) =>
      prevState.filter((task) => task.id !== id)
    );
  };

  const moveTaskToDone = (id) => {
    let taskObj;
    inProgressList.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });
    setInProgressList((prevState) =>
      prevState.filter((task) => task.id !== id)
    );
    setDoneTasksList((prevState) => [...prevState, taskObj]);
  };

  const makeTaskActive = (id) => {
    let taskObj;
    doneTasksList.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });

    setInProgressList((prevState) => [...prevState, taskObj]);
    setDoneTasksList((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-1 justify-between my-10">
      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-5 text-[#515151] border-b-2 border-b-[#B97E6D] flex items-center gap-x-2">
          Backlog
          <span className="border-l-2 border-[#D9D9D9] pl-2 h-4 leading-3.5 -mb-1.5">
            {todoList.length}
          </span>
        </h2>
        <Form inputValue={inputValue} onChange={onChange} addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          moveTaskToInProgress={moveTaskToInProgress}
        />
      </section>

      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-5 text-[#515151] border-b-2 border-b-[#E1D17F] flex items-center gap-x-2">
          in progress
          <span className="border-l-2 border-[#D9D9D9] pl-2 h-4 leading-3.5 -mb-1.5">
            {inProgressList.length}
          </span>
        </h2>
        <InProgressList
          inProgressList={inProgressList}
          moveTaskToBacklog={moveTaskToBacklog}
          moveTaskToDone={moveTaskToDone}
        />
      </section>

      <section className="bg-white py-5 px-8 w-full rounded-md shadow-lg md:self-start min-h-40">
        <h2 className="font-semibold capitalize text-xl mb-5 pb-5 text-[#515151] border-b-2 border-b-[#B4CD93] flex items-center gap-x-2">
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
