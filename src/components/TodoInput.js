import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodoAction } from '../redux';

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (todo.trim() === "") return;

    dispatch(addTodoAction({
        id: uuidv4(),
        name: todo,
        complete: false
    }));

    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          onChange={onChange}
          value={todo}
          placeholder="Add a todo.."
        />
        <button>Add Todo</button>
      </div>
    </form>
  );
}
