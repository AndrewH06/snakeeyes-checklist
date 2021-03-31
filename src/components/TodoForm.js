import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInputs] = useState("");

  const handleSubmit = (t) => {
    t.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInputs("");
  };

  const handleChange = (t) => {
    setInputs(t.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
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
