import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Views/Nav";
import Todo from "./Views/Todo";

function App() {
  const [name, setName] = useState("VGK");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "code" },
    { id: "todo2", title: "play game" },
    { id: "todo3", title: "eat" },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = { id: "abc", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - {name}</h1>
        <Todo todos={todos} />
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
