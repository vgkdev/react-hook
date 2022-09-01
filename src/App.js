import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Views/Nav";
import Todo from "./Views/Todo";

function App() {
  const [name, setName] = useState("VGK");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "code", type: "Khang" },
    { id: "todo2", title: "play game", type: "Quyen" },
    { id: "todo3", title: "eat", type: "Khang" },
    { id: "todo4", title: "sleep", type: "Quyen" },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = { id: "abc", title: address, type: "Khang" };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - {name}</h1>
        <Todo todos={todos} title={"All todos"} />
        <Todo
          todos={todos.filter((item) => item.type === "Khang")}
          title={"Khang's todos"}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
