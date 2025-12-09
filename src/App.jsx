import { Component } from "react";
import { TodoList } from "./components/Todo/TodoList";
import { DoneTasksList } from "./components/Done/DoneTasksList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoListData: [],

      doneTasksList: [],

      inputValue: "",
    };
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      title: this.state.inputValue,
    };

    if (this.state.inputValue.trim().length > 0) {
      this.setState({
        todoListData: [...this.state.todoListData, todo],
        inputValue: "",
      });
    } else {
      alert("Enter task");
    }
  };

  makeTaskDone = (id) => {
    let taskObj;
    this.state.todoListData.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });

    const todoListData = this.state.todoListData.filter(
      (task) => task.id !== id
    );

    this.setState({
      todoListData,
      doneTasksList: [...this.state.doneTasksList, taskObj],
    });
  };

  removeTask = (id) => {
    const doneTasksList = this.state.doneTasksList.filter(
      (task) => task.id !== id
    );
    this.setState({
      doneTasksList,
    });
  };

  makeTaskActive = (id) => {
    let taskObj;
    this.state.doneTasksList.filter((task) => {
      if (task.id === id) {
        taskObj = {
          id: task.id,
          title: task.title,
        };
      }
    });

    const doneTasksList = this.state.doneTasksList.filter(
      (task) => task.id !== id
    );

    this.setState({
      todoListData: [...this.state.todoListData, taskObj],
      doneTasksList,
    });
  };

  render() {
    return (
      <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-between mt-10">
        <section className="bg-red-100 py-5 px-8 min-w-[48%] rounded-xl shadow-lg self-start min-h-40">
          <h2 className="font-semibold text-xl py-2 text-center">To Do List</h2>
          <TodoList
            inputValue={this.state.inputValue}
            onChange={this.onChange}
            addTodo={this.addTodo}
            todoListData={this.state.todoListData}
            makeTaskDone={this.makeTaskDone}
          />
        </section>

        <section className="bg-green-100 py-5 px-8 min-w-[48%] rounded-xl shadow-lg self-start min-h-40">
          <h2 className="font-semibold text-xl mb-4 py-2 text-center">
            Finished Tasks
          </h2>
          <DoneTasksList
            doneTasksList={this.state.doneTasksList}
            makeTaskActive={this.makeTaskActive}
            removeTask={this.removeTask}
          />
        </section>
      </div>
    );
  }
}

export default App;
