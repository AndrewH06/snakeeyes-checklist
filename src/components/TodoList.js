import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Context } from "./Context";

function TodoList() {
  const [todos, setTodos] = useState(["example"]);

  const handleTodos = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todos, ...todos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <Context.Provider value={{ todos }}>
        <h1>AP Prep Checklist</h1>
        <TodoForm onSubmit={handleTodos} />
        <Todo
          // todo={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Context.Provider>
    </div>
  );
}

export default TodoList;
