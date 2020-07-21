import React, { useEffect, useState } from "react";
import db from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});

  const handleChange = (event) => setTodo(event.target.value);

  const handleClick = () => {
    db.collection("todos")
      .add({ text: todo, status: "pending" })
      .then(() => console.log("Se ha agregado un nuevo TODO"));
  };

  const deleteTodoHandle = (id) => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => console.log("Has borrado el todo"));
  };

  const completeTodoHandle = (id) => {
    db.collection("todos")
      .doc(id)
      .update({ status: "completed" })
      .then(() => console.log("TODO COMPLETADO"));
  };

  const selectedTodoHandler = (id) => {
    db.collection("todos")
      .doc(id)
      .get()
      .then((doc) => setSelectedTodo(doc.data()));
  };

  useEffect(() => {
    const unsuscribe = db
      .collection("todos")
      .onSnapshot((snapshot) => setTodos(snapshot.docs));
    return () => unsuscribe();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Agregar Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            Texto: {todo.data().text} Status: {todo.data().status}
            <button onClick={() => deleteTodoHandle(todo.id)}>Eliminar</button>
            <button onClick={() => completeTodoHandle(todo.id)}>
              Completar
            </button>
            <button onClick={() => selectedTodoHandler(todo.id)}>
              Seleccionar
            </button>
          </li>
        ))}
      </ul>
      <h1>Todo seleccionado:</h1>
      <h2>Texto: {selectedTodo.text}</h2>
      <p>Status: {selectedTodo.status}</p>
    </div>
  );
};

export default App;
