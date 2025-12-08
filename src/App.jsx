import { Component } from "react";
import "./App.css";
import { TodoList } from "./components/Todo/TodoList";

class App extends Component {
  render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}

export default App;
