import React from "react";

const Todo = (props) => {
  const { todos, title, deleteDataTodo } = props;

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todo-container">
      <div className="todo-container" style={{ color: "red" }}>
        {title}
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title}{" "}
              <button onClick={() => handleDelete(todo.id)}>x</button>
            </li>
          </div>
        );
      })}

      <hr />
    </div>
  );
};

export default Todo;
