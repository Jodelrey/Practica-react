//useRef
//useRef es un hook. Es un hook que nos permite crear referencias. Una referencia es un valor que esta fuera del ciclo de vida de un componente.
/**
 *  es un valor que se puede mutar
 * es un valor que no lo afecta ni afecta el renderizado
 */

//Casos de uso
/**
 * obtener elementos del DOM (no el componente sino el elemento)
 * obtener los valores previos de un componente.
 * performance / ciertos renderizados
 * para saber cuando un componente se renderizo por primera vez
 */

//useRef tiene un valor inicial que va dentro de los parentesis. UseRef devuelve una referencia, esta referencia es mutable, es decir, la podemos cambiar y el componente no va a renderizarse
//La referencia tiene una propiedad que se llama current. En current vamos a tener el valor actual.
//Al no ejecutar un nuevo renderizado, no es un valor reactivo. Si estamos haciendo un cambio en una referencia, y este cambio debe reflejarse en un componente, solo se va a ver cuando el componente vuelva a renderizarse.
/**
 * el valor de una referencia se mantiene entre renderizados
 * al modificarlo no triggerea un nuevo renderizado
 * no es reactivo. Cuando se modifica no se ve el cambio en la interfaz renderizada
 */

//Para obtener elementos del DOM se utiliza la prop ref. Con esto tenemos acceso al elemento del dom que ese componente renderiza. Sirve para modificar el DOM por fuera de react
const valueRef = useRef(0);
<input type="text" ref={inputRef} />;
//Si creo una referencia y la asocio a un elemento primitivo de react mediante la prop ref, con la prop current puedo tener acceso a ese elemento del DOM.

//debounce -> ejecutar un efecto cuando se termina de realizar una accion. El debounce se hace con un timer
const llamarApi = () =>
  fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then((response) => response.json())
    .then((data) => setCharacters(data.results));

useEffect(() => {
  clearTimeout(timeRef.current);
  timerRef.current = setTimeout(() => llamarApi, 1000);
}, [search]);

//throttle -> permite controlar cuando se va a realizar un efecto
//Primero chequea si se esta hanciendo una llamada a la API. Mientras se esta ejecutando una llamada que todavia no llego, no hacer una nueva innecesaria

const llamarApi = () =>
  fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      llamadaEnCursoRef.current = false;
    });
useEffect(() => {
  if (llamadaEnCursoRef.current) {
    return;
  }
  llamadaEnCursoRef.current = true;
  clearTimeout(timeRef.current);
  timerRef.current = setTimeout(() => llamarApi, 1000);
}, [search]);
