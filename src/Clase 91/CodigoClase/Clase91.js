//Routing

//En una aplicacion por lo general tenemos distintos tipos de vistas. La vista es la pantalla o pagina. Una vista es lo que se muestra en un momento dado

//Por lo general en una aplicacion de tipo CRUD o ABM tenemos pantallas o vistas de:
// - listados de entidades
// - detalle/informacion de la entidad
// - edicion de entidad

//El problema de cambiar de paginas/pantallas en React es que perderiamos el estado de las variables. La solucion en react es tener las distintas vistas. Cada pantalla es un componente y al cambiar de pantalla lo que hacemos es un renderizado condicional entre una pantalla y otra manteniendo el estado general de la aplicacion. Nunca nos movemos de pagina, solo se renderizan componentes. Las aplicaciones de este tipo se conocen como SPA o single page aplication
// Para esto se utiliza la libreria react-router-dom
//La libreria tiene el componente BrowserRouter (se lo renombra a Router). Es el componente principal de las paginas. Todas las vistas o lo que se deba renderizar deben estar dentro de este componente. Router internamente es un contexto.
//El componente Route son las rutas. Van dentro de Router. La principal prop de Route es path. Dentro de path va la parte de la url que va a indicar las distintas rutas. Si en path solo ponemos "/" vamos a la pagina ppal.
//A medida q seleccionamos una ruta especifica solo se renderiza el componente que contiene esa ruta. Es un renderizado condicional
//El componente Link tiene la prop to que cambia la url sin recargar la pagina y permite ir switcheando entre distintas vistas. El link lleva a una cierta direccion y, si el router encuentra una ruta que tenga ese camino, va a renderizar lo que tenga dentro suyo
//A Route necesitamos agregarle exact para que cargue exactamente ese camino. Excepto que tenga links anidados
//Switch envuelve todas las rutas. Renderiza la primera vista que encuentre que coincida el path

//useParams es un hook que permite trabajar con parametros de busqueda. Todos los parametros que esten luego de los : (en la ruta en la prop path) se guardan dentro de un objeto, los puedo acceder por un destructuring del useParam
const { productId } = useParams();
//De esta forma podemos tener rutas dinamicas que nos lleven a una misma vista pero con productos, por ejemplo, distintos.
