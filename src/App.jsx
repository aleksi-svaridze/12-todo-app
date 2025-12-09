import { Component } from "react";
import "./App.css";
import { TodoList } from "./components/Todo/TodoList";
import { DoneTasksList } from "./components/Done/DoneTasksList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoListData: [
        { id: 1, title: "Buy milk", done: false },
        { id: 2, title: "Buy sugar", done: false },
        { id: 3, title: "Buy coffee", done: false },
      ],

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
      id: this.state.todoListData.length + 1,
      title: this.state.inputValue,
      done: false,
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

  makeTaskDone = (done, id) => {
    const doneTask = this.state.todoListData.filter((task) => task.id === id);

    doneTask[0].done = true;

    const todoListData = this.state.todoListData.filter(
      (task) => task.id !== id
    );
    this.setState({
      todoListData,
      doneTasksList: [...this.state.doneTasksList, doneTask],
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
    console.log(id);
  };

  render() {
    return (
      <div className="container mx-auto flex justify-between mt-10">
        <section className="bg-red-100 py-5 px-8 min-w-[48%] rounded-xl">
          <h2 className="font-semibold text-xl border-b py-2 text-center">
            To Do List
          </h2>
          <TodoList
            inputValue={this.state.inputValue}
            onChange={this.onChange}
            addTodo={this.addTodo}
            todoListData={this.state.todoListData}
            makeTaskDone={this.makeTaskDone}
          />
        </section>

        <section className="bg-green-100 py-5 px-8 min-w-[48%] rounded-xl">
          <h2 className="font-semibold text-xl mb-4 border-b py-2 text-center">
            Done Tasks List
          </h2>
          <DoneTasksList
            doneTasksList={this.state.doneTasksList}
            makeTaskActive={this.state.makeTaskActive}
            removeTask={this.removeTask}
          />
        </section>
      </div>
    );
  }
}

export default App;
