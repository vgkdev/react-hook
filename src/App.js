import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Views/Nav";

function App() {
  const [name, setName] = useState("VGK");
  const [address, setAddress] = useState("");

  const handleEventClick = (event) => {
    setName(address); //async
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
