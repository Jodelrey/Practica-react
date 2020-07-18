//useReducer

//useReducer tiene dos parametros principales: reducer y el valor inicial. Devuelve dos valores, uno es el estado y el segundo la funcion dispatch.
//initialValue es exactamente igual que en useState, es el valor inicial que va a tener el estado.
//reducer es una funcion que, dado un estado y una accion, devuelve un nuevo estado. Un reducer es una funcion que toma un conjunto de valores y devuelve un unico valor.
//El reducer tiene ciertos criterios:
// - es una funcion pura: no puede mutar el estado y no puede tener efectos secundarios.
// -

//El reducer se define fuera del componente, siendo una de las ventajas del useReducer
//Que es el action del reducer? El action es una accion que se ejecuta en nuestra aplicacion, es un evento, algo que pasa en nuestra aplicacion. Se utiliza un switch, para cada caso de accion se debe devolver un estado
const reducer = (state, action) => {
  switch (action) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

//dispatch lo que hace es disparar o enviar un evento. Es lo que le anuncia al reducer que una accion fue ejecutada. Lo que pasemos entre parentesis en la funcion dispatch va a ser lo que este como segundo parametro del reducer que esta declarado en el hook.  El reducer evalua ese segundo parametro y en base a la accion devuelve un nuevo estado. El estado del reducer es el estado que tenemos hasta el momento cuando se ejecuto la accion.
//El reducer se ejecuta cuando se llama a la funcion dispatch

// state -> dispatch -> reducer -> newState

const increase = () => dispatch("INCREASE");
const decrease = () => dispatch("DECREASE");
const reset = () => dispatch("RESET");
return (
  <div>
    <h1>{counter}</h1>
    <button onClick={increase}>Sumar</button>
    <button onClick={decrease}>Restar</button>
    <button onClick={reset}>Resetear</button>
  </div>
);

//Ventajas
// Separacion de logica/componente. Toda la logica de las acciones queda en la funcion reducer. Esa funcion la puedo mover a otro archivo y de esta forma el componente queda sin logica.
//Al estar la logica separada, la funcion puede ser testeada
//Centralizacion de la logica - tenemos la logica en un solo lugar y no esta desparramada por todo el componente.
//Es mas declarativo - al separar la logica del componente, el componente solo anuncia que se genero un evento.

//Casos de uso vs useState
//Cuando tenemos logica compleja
//Cuando tenemos estado complejo.
//Testear la logica de un componente
//Reutilizar la logica de un componente
//Cuando tenemos mas de 3 estados relacionados en un componente. Cuando tenemos en un mismo componente 4 o 5 estados que estan mas o menos relacionados, podemos meterlos en un useReducer.

//Cuándo utilizar useState
//cuando el estado es un valor primitivo -> strings, numeros, booleanos y no tiene una logica compleja
//cuando es 1 o 2 estados en un componente

//Por convencion las acciones son objetos, se pasan entre los parentesis del dispatch
//Otra convencion es que el caso por default devuelva un error. Caso contrario el estado no va a modificarse pero la app no va a advertirnos de que estamos intentando hacer una accion que no es valida.
//Otra convencion es que, como estamos trabajando con strings y estas acciones pueden ser reutilizables en otro lugar del codigo, se deberia utilizar un ENUM
