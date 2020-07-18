//React-Router-Dom
//BrowserRouter: se renombra como Router. Es el provider que ofrece toda la logica y las funciones de ruteo, por lo tanto todos los componentes que tiene que acceder a la parte de ruteo deben estar dentro de este provider. Por lo general contiene a todos los componentes de la aplicacion
//Route nos permite definir las distintas rutas o vistas de nuestra aplicacion y que es lo que se va a mostrar en ellas. Tiene la prop "path" que es donde ponemos la parte de la url que es la direccion de lo que va a ser nuestra vista. Tambien se agrega la prop "exact" para que la ruta sea exacta y solo matchee lo que contiene cuando la ruta coincide exactamente con la estructura del path.
//Switch renderiza una ruta a la vez, la primera que coincide con la direccion. De esta forma el arbol de componentes no renderiza innecesariamente todas las demas rutas. Por otro lado, cuando hay una ruta que no coincide con las rutas declaradas renderiza el componente "not found"
//Link tiene la prop "to" que nos lleva a una ruta especifica. El link es un elemento a.
//NavLink es un link de navegacion. Tiene una logica que permite, segun la ruta en la que estamos, darle un cierto estilo en particular. No todos los links tienen que ser NavLinks. Los NavLinks por lo general son los links de navegacion.
//NavLink tiene dos props:
// - activeStyle le da un estilo particular, asignandole un objeto de estilo. Este estilo se va a aplicar cuando el componente este activo, es decir, cuando la vista de la ruta este activa. Se debe agregar tbn exact para que no tome en cuenta rutas parciales. Esto se debe a que cuando tenemos rutas anidadas, tal vez necesitemos que cambie el aspecto de ambos links.
// - activeClassName: lo que hace es agregarle una clase cuando esta activa
//const StyledNavLink = styled(NavLink)`
// &.selected {
//     color: red;
//     font-weight: bold;
//   }
// `;
/* <NavLink exact activeClassName="selected" to="/">
        Home
      </NavLink> */

//Redirecciones. Redirect tiene el parametro to que tiene la ruta hacia donde nos redirecciona. Cuando se renderiza o se monta el componente nos redirige
/* <Route exact path="/account">
          <h1>My Account</h1>
          {!loggedIn && <Redirect to="/login" />}
        </Route> */

//HOOKS
//useHistory: es un hook que devuelve una variable con la cual podemos acceder a la informacion del historial de navegacion. useHistory lo que hace es darnos los valores que estan en el provider de router. Tiene distintas funciones (go, goback, push, replace) son todas funciones para manipular el ruteo. La mas comun es push. Ejemplo agregamos un boton para ir a home y en el handleClick pusheamos a history esa ruta.

// const Categories = () => {
//     //nos permite manejar el historial de rutas

//     const history = useHistory();

//     const handleClick = () => {
//       history.push("/");
//     };

//     const handleGoBack = () => {
//       //history.go(-2)
//       history.goBack();
//     };

//     return (
//       <div>
//         <h1>Categories</h1>
//         <button onClick={handleClick}>Ir a Home</button>
//         <button onClick={handleGoBack}>Ir atras</button>
//       </div>
//     );
//   };

//useRouteMatch: nos permite acceder a la ruta. Se utiliza para hacer rutas anidadas.
//La diferencia entre path y url es que si tenemos una variable va a aparecer en path. La url es el caso concreto y path es la estructura del camino.
path: "/categories/:id";
url: "/categories/celulares";
//Cuando tenemos rutas anidadas, en el route de App tenemos que quitar el exact porque sino nunca se van a renderizar las rutas internas.
//Para evitar que las rutas dependan de strings y el riesgo de que, si se modifica la ruta ppal, queden desactualizadas las rutas que dependen de esta, se desestructura useRouteMatch y se utiliza eso en las rutas
//Path ofrece la ruta superior y al ir anidando ruta nos ahorramos problemas en caso de tener que cambiar rutas porque siempre van a depender de la ruta que las contiene
//Como Path tiene las variables y url los casos especificos para los links se utiliza url y para las rutas path
//Query Params: son los paramtros de busqueda que van luego del signo de pregunta en la ruta. Para manejar el string tenemos el URLSearchParams. Estructura los datos de forma similar al localStorage, en forma de clave valor como si fuera un objeto.
//Los metodos de URLSearchParams
const search = new URLSearchParams();
search.set("price", 440);
search.set("name", "celular xiaomi");
search.set("origin", "china");
search.has("name"); //booleano
search.get("price"); //retorna valor como string
search.toString(); //obtenemos todos los parametros de busqueda encadenados
search.delete("origin"); //borra un parametro

const newSearch = new URLSearchParams(
  "price=440&name=celular+xiaomi&origin=china"
); //podemos pasarle el string de valores de busqueda encadenado

//useLocation
//Si tenemos parametros de busqueda y le ponemos exact en la ruta nos va a dar error
//Los parametros de busqueda no se definen dentro de la ruta. Se definen en links o si los hacemos de forma dinamica con el hook de useHistory

const location = useLocation();

//location tiene dos parametros: pathname que es como la ruta (ejemplo:"/products") y search que es la busqueda (ej: "price=440&name=celular+xiaomi&origin=china")
//con useLocation puedo acceder a la busqueda, utilizar el metodo de construccion de URLSearchParams para reconstruir lo que tengo actualmente, modificarlo con los metodos y redireccionar esa ruta. Con esto puedo hacer un useEffect, hacer una llamada a la API con los nuevos valores de busqueda y actualizar los nuevos valores.

//useLocation nos da un objeto del cual las propiedades que nos interesan son pathname y search. Pathname es la parte de la ruta y search son los parametros de busqueda o query params(lo que viene despues del signo de pregunta).
//Con esa busqueda podemos manipularla, actualizar esa busqueda cuando activamos o desactivamos filtros. Podemos agregar un nuevo valor con set, una vez construido el objeto. Una vez que tenemos todos los parametros de busqueda tenemos que redireccionar/recargar la vista con la nueva url con el nuevo filtro. Para esto necesitamos construir una nueva url, la cual se construye con la parte de la ruta (pathname) y la parte del string de los query params con el metodo toString

const Products = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();

  const handleClick = () => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("discount", true);
    const newURL = `${pathname}?${searchParams.toString()}`;
    history.push(newURL);
  };

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={handleClick}>Buscar con descuento</button>
    </div>
  );
};
