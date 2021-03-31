import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleTodos = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>SnakeEyes Checklist</h1>
      <TodoForm onSubmit={handleTodos} />
    </div>
  );
}

export default TodoList;
