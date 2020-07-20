import React, { createContext, useReducer } from "react";
import { reducer, addTodoAction, deleteTodoAction } from "../ducks/todoDuck";

const initialState = [];

const TodoContext = createContext();

const TodoProvider = (children) => {
  const [todos, dispatchTodos] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider
      value={(todos, dispatchTodos, addTodoAction, deleteTodoAction)}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
export default TodoContext;
