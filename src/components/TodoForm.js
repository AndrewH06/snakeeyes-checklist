import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInputs] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
      {props.edit ? (
        <>
          <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Edit your todo"
            value={input}
            name="text"
            className="todo-input"
          />
          <button className="todo-btn edit">Update</button>
        </>
      ) : (
        <>
          <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Add things to do!"
            value={input}
            name="text"
            className="todo-input"
          />
          <button className="todo-btn">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
