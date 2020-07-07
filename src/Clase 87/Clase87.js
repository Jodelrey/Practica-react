//useEffect - es un hook que lo utilizamos cuando necesitamos efectos secundarios o cuando necesitamos correr ciertos efectos o funciones cuando el componente se monta, se desmonta, se renderiza o cuando cambia cierto valor.
//Llamar a una API es un efecto secundario
//Con el metodo GET se hace el pedido al servidor de la API y cuando llega esa informacion se ejecuta el callback que haya en el metodo THEN. Then utiliza un callback. Este callback tiene un primer parametro (data o response, es la respuesta que nos llega del metodo get)
// const App = () => {
//     useEffect(() => {
//       axios.get("https://rickandmortyapi.com/api/character/").then(()=>{});
//     });
//     return <div></div>;
//   };
