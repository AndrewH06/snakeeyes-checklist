import React, { useState } from "react";
// import TodoForm from "./TodoForm";
import { useContext } from "react";
import { Context } from "./Context";
import { VscChromeClose } from "react-icons/vsc";
import { HiPencil } from "react-icons/hi";

function Todo({ completeTodo, removeTodo }) {
  const { todos } = useContext(Context);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  console.log(todos);
  return (
    <div>
      {todos.length !== 0 ? (
        <>
          {todos.map((todo, index) => {
            return (
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
            );
          })}
        </>
      ) : (
        <h1>todos.length === 0</h1>
      )}
    </div>
  );
}

export default Todo;
