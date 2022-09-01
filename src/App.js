import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("run use effect: address");
  }, [address]); //[] === didmount - only re-run if address is changed

  useEffect(() => {
    console.log("run use effect: todos");
  }, [todos]); //on;y re-run if todos is changed

  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      title: address,
      type: "Khang",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let changeTodo = todos;
    changeTodo = changeTodo.filter((item) => item.id !== id);
    setTodos(changeTodo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - {name}</h1>
        <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
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
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
