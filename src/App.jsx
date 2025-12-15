import { TodoList } from "./components/Todo/TodoList";
import { DoneTasksList } from "./components/Done/DoneTasksList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoListData, setTodoListData] = useState([]);
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
      setTodoListData([...todoListData, todo]);
      setInputValue("");
    } else {
      alert("Enter task");
    }
  };

  const makeTaskDone = (id) => {
    let taskObj;
    todoListData.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });

    const filteredTodoListData = todoListData.filter((task) => task.id !== id);

    setTodoListData(filteredTodoListData);
    setDoneTasksList([...doneTasksList, taskObj]);
  };

  const removeTask = (id) => {
    const filteredDoneTasksList = doneTasksList.filter(
      (task) => task.id !== id
    );
    setDoneTasksList(filteredDoneTasksList);
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

    const filteredDoneTasksList = doneTasksList.filter(
      (task) => task.id !== id
    );

    setTodoListData([...todoListData, taskObj]);
    setDoneTasksList(filteredDoneTasksList);
  };

  return (
    <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-between mt-10">
      <section className="bg-red-100 py-5 px-8 min-w-[48%] rounded-xl shadow-lg self-start min-h-40">
        <h2 className="font-semibold text-xl py-2 text-center">To Do List</h2>
        <TodoList
          inputValue={inputValue}
          onChange={onChange}
          addTodo={addTodo}
          todoListData={todoListData}
          makeTaskDone={makeTaskDone}
        />
      </section>

      <section className="bg-green-100 py-5 px-8 min-w-[48%] rounded-xl shadow-lg self-start min-h-40">
        <h2 className="font-semibold text-xl mb-4 py-2 text-center">
          Finished Tasks
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
