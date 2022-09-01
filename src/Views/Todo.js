import React from "react";

const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="todo-container">
      <div className="todo-container" style={{ color: "red" }}>
        {props.title}
      </div>
      {todos.map((todo) => {
        console.log("check todo list", todo);
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}

      <hr />
    </div>
  );
};

export default Todo;
