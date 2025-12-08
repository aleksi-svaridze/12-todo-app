import { Component } from "react";
import { Todo } from "./Todo";

export class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoListData: [
        { id: 1, title: "Buy milk", done: false },
        { id: 2, title: "Buy sugar", done: false },
        { id: 3, title: "Buy coffee", done: false },
      ],

      doneTasksList: [
        { id: 1, title: "Some task 1", done: true },
        { id: 2, title: "Some task 2", done: true },
        { id: 3, title: "Some task 3", done: true },
      ],

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

  makeTaskDone = (n) => {
    console.log(n);
  };
  render() {
    return (
      <>
        <form className="flex items-center my-4 gap-x-2">
          <input
            value={this.state.inputValue}
            onChange={(e) => this.onChange(e.target.value)}
            type="text"
            className="bg-white outline-none py-1 px-2 text-sm rounded"
          />
          <button
            onClick={(e) => this.addTodo(e)}
            type="submit"
            className="bg-white cursor-pointer shadow rounded text-sm py-1 px-2 w-full font-medium"
          >
            Add
          </button>
        </form>
        <ul className="flex flex-col gap-y-2">
          {this.state.todoListData.map((listItem) => (
            <Todo
              key={listItem.id}
              title={listItem.title}
              done={listItem.done}
              id={listItem.id}
              action={() => this.makeTaskDone(listItem.done)}
            />
          ))}
        </ul>
      </>
    );
  }
}
