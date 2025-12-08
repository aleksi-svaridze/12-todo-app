import { Component } from "react";
import { Done } from "./Done";

export class DoneTasksList extends Component {
  constructor() {
    super();
    this.state = {
      doneTasksList: [
        { id: 1, title: "Some task 1", done: true },
        { id: 2, title: "Some task 2", done: true },
        { id: 3, title: "Some task 3", done: true },
      ],
    };
  }

  render() {
    return (
      <ul className="flex flex-col gap-y-2">
        {this.state.doneTasksList.map((listItem) => (
          <Done
            key={listItem.id}
            title={listItem.title}
            done={listItem.done}
            id={listItem.id}
            action={() => this.makeTaskDone(listItem.done)}
          />
        ))}
      </ul>
    );
  }
}
