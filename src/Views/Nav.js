import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/timer">Timer App</a>
      <a href="/todo">Todo App</a>
      <a href="/secret">Secret</a>
    </div>
  );
};

export default Nav;
