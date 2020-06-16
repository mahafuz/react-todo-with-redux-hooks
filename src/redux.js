import { createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "Go to the gym",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Do Laundry",
      complete: true,
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
};

export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodoAction = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
