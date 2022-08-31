import logo from "./logo.svg";
import "./App.css";
import Nav from "./Views/Nav";

function App() {
  const handleEventClick = (event) => {
    console.log("click me", event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - VGK</h1>
        <input
          type="text"
          value={"VGK"}
          onClick={(event) => handleEventClick(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
