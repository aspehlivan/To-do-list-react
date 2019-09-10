import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<TodoList />, document.getElementById("app"));
