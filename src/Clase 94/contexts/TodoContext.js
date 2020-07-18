import React, { createContext, useReducer } from "react";
import shortId from "shortid";

const initialState = [];

const TodoContext = createContext();

const TodoProvider = (children) => {
  const [todos, dispatchTodos] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={(todos, dispatchTodos)}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
export default TodoContext;
