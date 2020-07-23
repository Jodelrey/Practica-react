import React, { useState } from "react";
import db from "./firebase";

const App = () => {
  const [lastId, setLastId] = useState("");

  const addTodoHandler = () => {
    db.collection("todos")
      .add({
        task: "Nuevo Todo",
        status: "pending",
      })
      .then((doc) => setLastId(doc.id));
  };

  const getAllTodosHandler = () => {
    db.collection("todos")
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => <li key={doc.id}>{doc.data}</li>)
      );
  };

  const getTodoHandler = () => {
    db.collection("todos")
      .doc(lastId)
      .get()
      .then((doc) => console.log(doc.data()));
  };

  const completeTodoHandler = () => {
    db.collection("todos")
      .doc(lastId)
      .update({ status: "completed" })
      .then(() => console.log("Actualizado"));
  };

  const deleteTodoHandler = () => {
    db.collection("todos")
      .doc(lastId)
      .delete()
      .then(() => console.log("Borrado"));
  };

  useEffect(() => {
    const unsuscribe = db.collection("todos").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => console.log(doc.data(), doc.id));
    });
    //cortamos la conexion o escucha a la coleccion cuando el componente se desmonta
    return () => unsuscribe();
  }, []);

  return (
    <div>
      <button onClick={addTodoHandler}>Add Todo</button>
      <button onClick={getAllTodosHandler}>Get All Todos</button>
      <button onClick={getTodoHandler}>Obtener Last Todo</button>
      <button onClick={completeTodoHandler}>Complete last todo</button>
      <button onClick={deleteTodoHandler}>Delete last todo</button>
    </div>
  );
};

export default App;
