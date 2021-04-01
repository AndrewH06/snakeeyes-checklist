import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { VscChromeClose } from "react-icons/vsc";
import { HiPencil } from "react-icons/hi";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  if (todos) {
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <VscChromeClose
            onClick={() => removeTodo(todo.id)}
            className="delete"
          />
          <HiPencil
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit"
          />
        </div>
      </div>
    ));
  } else {
    return <div></div>;
  }
}

export default Todo;
