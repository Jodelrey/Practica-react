//useReducer

//Es un hook que se utiliza cuando tenemos que manejar estados complejos. (Tenemos una estructura de datos compleja: objeto o arrays de objetos) o cuando la logica es complicada
//Permite extraer la logica del componente, esto lo hace mas legible. Tambien permite testear la logica y analizarla por su cuenta. A su vez se puede reutilizar la logica.

//useReducer + useContext
//la idea es que el reducer devuelva un estado. La idea es que devuelva siempre la misma estructura que el estado actual.
//El reducer responde a ciertas acciones, segun cada accion hace una operacion distinta dependiendo del evento ejecutado en nuestra aplicacion. Para esto se utiliza un switch con el cual vamos detectando cada tipo de accion y respondiendo a cada accion con una cierta logica y devolviendo un nuevo estado que es el resultado de esa accion.
//La accion es un parametro. Por convencion es un objeto que tiene al menos como propiedad "type". Dentro de type va un string que indica que tipo de accion va a ser
const action = { type: "ADD_TODO" };
//Para saber que accion se va a ejecutar debemos acceder a la propiedad type
//Dentro del provider llamamos a useReducer y compartimos dentro del provider tanto el estado como la funcion que nos permite despachar las acciones

const TodoProvider = (children) => {
  const [todos, dispatchTodos] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={(todos, dispatchTodos)}>
      {children}
    </TodoContext.Provider>
  );
};

//reducers o ducks. Los archivos de ducks son varias cosas que necesita redux para funcionar.
//Dentro van las constantes que son los nombres de las acciones. Las funciones que devuelven el objeto que va en el dispatch (actions creators)

const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: { message: todo },
});
const deleteTodoAction = (id) => ({ type: "DELETE_TODO", payload: { id } });
