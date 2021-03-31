import React, { useState } from "react";

function TodoForm() {
  const [input, setInputs] = useState("");
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add things to do!"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-btn">Add</button>
    </form>
  );
}

export default TodoForm;
