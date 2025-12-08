import { Component } from "react";
import { Todo } from "./Todo";

export class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoListData: [
        { id: 1, title: "Buy milk", done: true },
        { id: 2, title: "Buy sugar", done: false },
        { id: 3, title: "Buy coffee", done: false },
      ],
      inputValue: "",
    };
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  addtask = () => {};
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
            />
          ))}
        </ul>
      </>
    );
  }
}
