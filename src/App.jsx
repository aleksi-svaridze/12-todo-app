import { Component } from "react";
import "./App.css";
import { TodoList } from "./components/Todo/TodoList";
import { DoneTasksList } from "./components/Done/DoneTasksList";

class App extends Component {
  render() {
    return (
      <div className="container mx-auto flex justify-between mt-10">
        <section className="bg-red-100 py-5 px-8 min-w-[48%] rounded-xl">
          <h2 className="font-semibold text-xl border-b py-2 text-center">
            To Do List
          </h2>
          <TodoList />
        </section>

        <section className="bg-green-100 py-5 px-8 min-w-[48%] rounded-xl">
          <h2 className="font-semibold text-xl mb-4 border-b py-2 text-center">
            Done Tasks List
          </h2>
          <DoneTasksList />
        </section>
      </div>
    );
  }
}

export default App;
