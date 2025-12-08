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
    };
  }
  render() {
    return (
      <ul>
        {this.state.todoListData.map((listItem) => (
          <Todo key={listItem.id} title={listItem.title} done={listItem.done} />
        ))}
      </ul>
    );
  }
}
