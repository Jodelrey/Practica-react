//Firebase authentication
//Se exporta solamente app y se importa "firebase/auth" que es la libreria que permite utilizar todas las funcionalidades de autorizacion y loggeo
//Cuando tenemos un formulario debemos ejecutar el event.preventDefault() para evitar que se recargue la pagina
//Para acceder a los valores de los input utilizamos el nombre del input. Ej: event.target.email.value. No hay necesidad de hacer un estado
//Para crear un registro se importa firebase
//Dentro de la funcion se llama a firebase y con el metodo auth tenemos acceso a los metodos para loggearse. El metodo para crear una cuenta es createUserWithEmailAndPassword. Este metodo nos da una respuesta que es el user. Esta promesa tambien puede tirar un error, con catch lo seteamos para poder mostrarlo en la aplicacion
const Signup = () => {
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    firebase
      //metodo para crear usuarios
      .auth()
      .createUserWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then((user) => console.log(user))
      .catch((error) => setError(error.message));
  };

  //Auth tambien tiene un listener que escucha cada vez que un usuario se loggea o desloggea. De esta forma sabemos si hay un usuario loggeado en nuestra aplicacion y actuar en consecuencia. Este listener lo tenemos que activar cuando se monta el componente. Se hace con un useEffect
  //Se usa el metodo onAuthStateChange. Este callback nos da el usuario. Con esto y un estado podemos informarle a la aplicacion o los distintos componentes si hay o no un usuario logueado. Esto, cuando se desmonta el componente, deberia limpiarse el callback para que no se generen renderizados innecesarios.
  const [user, setUser] = useState();
  useEffect(() => {
    const unsuscribe = firebase
      .auth()
      //listener que se ejecuta cuando hay el usuario se loguea/desloguea
      .onAuthStateChanged((user) => {
        setUser(user);
      });
    return () => unsuscribe();
  }, []);
};
//Para desloguearse se usa el metodo signOut()
const handleLogout = () => firebase.auth().signOut();

//Para loguearse
const [error, setError] = useState(false);
const handleSubmit = (event) => {
  event.preventDefault();
  setError(false);
  firebase
    .auth()
    //metodo para loguear con email y password
    .signInWithEmailAndPassword(
      event.target.email.value,
      event.target.password.value
    )
    .catch((error) => setError(error.message));
};

//Cuando estamos logueados o deslogueados deberia redireccionar a la pagina que corresponde
