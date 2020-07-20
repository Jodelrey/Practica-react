import React, { useState, useContext } from "react";
import TodoContext from "./contexts/TodoContext";

const App = () => {
  const { todos, dispatchTodos, addTodoAction, deleteTodoAction } = useContext(
    TodoContext
  );
  const [todo, setsTodo] = useState("");

  const handleChange = () => setTodo(event.target.value);
  const handleAddTodo = () => dispatchTodos(addTodoAction(todo));
  const handleDeleteTodo = (id) => dispatchTodos(deleteTodoAction(id));

  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} onKeyDown={} />
      <button onClick={handleAddTodo}>Agregar Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.message}
            <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
