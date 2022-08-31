import React from "react";

const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        console.log("check todo list", todo);
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
