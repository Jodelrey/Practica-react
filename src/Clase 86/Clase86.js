import React, { usestate, useEffect } from "react";

//useEffect

//Montaje o mount. Montar significa que el componente aparece en nuestra aplicacion. Lo insertamos o agregamos en la jerarquia de componentes de nuestra aplicacion. No es lo mismo que no mostrarse (Ejemplo con display none), por mas que no se este mostrando el componente esta en la jerarquia. Cada vez que se monta un componente se ejecuta nuevamente toda la funcion de ese componente. Los componentes entre un montaje y otro no son exactamente los mismos componentes. Cuando se vuelve a montar un componente, se vuelve a ejecutar la funcion y todo lo que esta dentro de ella se vuelve a regenerar, entonces si pudieramos comparar una version con otra no serian exactamente iguales
//Desmontaje o unmount. Es lo contrario de montar
//Renderizado o render: El concepto de renderizado implica que el componente se vuelve a ejecutar. Se vuelve a crear una nueva version del componente, todo lo que hay interno se destruye en cierta forma y se vuelve a construir en memoria y si lo comparacemos con la version anterior serian distintos, pero el renderizado ocurre cuando el componente sigue montado. Renderizar un componente es ejecutar toda la funcion que consiste el componente. Cada vez que la ejecutamos se crea una nueva version del componente, donde lo que tenemos en cierta forma se regenera. Ejemplo, si tenemos un useState, cada vez que cambio de estado se re renderiza el componente. No se llega a desmontar pero si se vuelve a ejecutar internamente todo lo que tenga dentro de la funcion ese componente. Lo mismo pasa cuando cambiamos los props. El renderizado, mientras el componente este montado, puede ocurrir un monton de veces. El montaje y desmontaje de un componente ocurre solo 1 vez

//El renderizado sucede cuando:
// - cambia el estado
// - cambian props
// - cuando se renderiza un componente padre (o ascendente en la jerarquia)

// Life cicle components
// - montaje -> agregar el componente a la jerarquia
// - renders -> mientras el componente esta montado, cuando cambia el estado, las props o se re renderiza un componente padre
// - desmontaje -> sacamos al componente del arbol de jerarquia

// const Title = () => {
//   const [count, setCount] = useState(1);
//   const handleClick = () => setCount(count + 1);
//   return (
//     <>
//       <h1>Hola</h1>;<button onClick={handleClick}>Incrementar {count}</button>
//     </>
//   );
// };

// const App = () => {
//   const [visible, setVisible] = useState();
//   const handleClick = () => setVisible(!visible);
//   return (
//     <>
//       <button onClick={handleClick}>Mostrar</button>
//       {visible && <Title />}
//     </>
//   );
// };

// export default App;

// useEffect es un hook. Permite crear efectos en react, que se conocen como efectos secundarios
// Los efectos secundarios son todas aquellas cosas que no estan ligadas a lo que es un componente y a los componentes que renderiza y al estado de ese componente.
// -timers
// -modificaciones al localStorage
// -eventListener globales
// -acceso al window y al body
// -acceso al DOM
// -uso de APIs

//useEffect
// -El primer parametro de useEffect es un callback de efecto secundario. Este callback va a ser el efecto que queremos lograr
// -El segundo parametro es un array que se denomina array de dependencias
// - sin array de dependencias -> el callback se ejecuta al montar el componente y en cada renderizado.
// -con array de dependencias: si este array esta vacio, el callback se ejecuta solo al montar el componente. Utilizamos el array vacio cuando queremos ejecutar cosas en un componente 1 sola vez. Esto se usa mucho cuando trabajamos con APIs
// -si el callback del efecto devuelve una funcion (si el callback devuelve otro callback) este callback se ejecuta cuando el componente se desmonta y antes de que el componente se vuelva a renderizar. Se llama Clean Up Callback

//Con el array de dependencias podemos indicarle a useEffect cuando queremos que se ejecute dependiendo de que dependencias van a cambiar. Todas las variables de estado tenemos que declararlas dentro del array de dependencias. Lo mismo cuando cambia un prop.
//Todas las variables que pongamos en el callback del primer parametro del useEffect tenemos que incluirlas en el array de dependencias

//como regla, si utilizamos un estado como dependencia, no modificar ese estando dentro del useEffect

const Title = () => {
  const [count, setCount] = useState(1);
  const [otherCount, setOtherCount] = useState(1);
  const handleClick = () => setCount(count + 1);
  const handleOtherClick = () => setOtherCount(otherCount + 1);
  useEffect(() => {
    console.log("Render");
  }); //de esta forma se ejecuta cada vez que el componente se monta y cada vez que el componente se re renderiza

  useEffect(() => {
    console.log("Mounted");
  }, []); //si el array de dependencias esta vacio se ejecuta solamente al montar el componente

  useEffect(() => {
    //este callback se ejecuta cuando el componente se desmonta y antes del render
    return () => console.log("Before render || Unmounted");
  });

  //si incluimos un valor en el array de dependencias el callback se ejecuta unicamente cuando cambia dicho valor, no en los demas renders
  useEffect(() => {
    console.log(`Valor de count: ${count}`);
  }, [count]); //solo se va a ejecutar si cambia el valor de count
  console.log("Render");

  //! NO HACER -> genera un bucle infinito. Si incluimos un estado en el array de dependencias, no modificar dicho estado en el callback
  // useEffect(()=>{
  //   setCount(count + 1)
  // }, [count])

  return (
    <>
      <h1>Hola</h1>
      <button onClick={handleClick}>Incrementar{count}</button>;
      <button onClick={handleOtherClick}>Incrementar Otro{otherCount}</button>;
    </>
  );
};
