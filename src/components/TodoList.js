import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "./../redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos && (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo" key={todo.id}>
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.complete}
                onChange={() => dispatch(toggleTodoAction(todo.id))}
              />
              <label
                htmlFor={todo.id}
                className={todo.complete ? "complete" : null}
              >
                {todo.name}
              </label>
              <span
                className="delete-todo"
                onClick={() => dispatch(deleteTodoAction(todo.id))}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
