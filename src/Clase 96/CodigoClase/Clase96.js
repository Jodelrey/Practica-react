//Firebase
//Firebase nos permite utilizar una base de datos sin tener necesidad de estar preocupandonos por el backend.

//Firebase tiene desarrollada una libreria oficial con funciones propias que facilitan enviar y obtener datos de la API.

//Firebase se debe instalar con npm install firebase
//Se importa en el archivo firebase.js donde copiamos el codigo que nos provee la pagina
//Hay que importar tambien la base de datos que se llama firestore. al importar firestore lo que hace es agregarle funcionalidades/metodos al objeto firebase

//La base de datos de firestore es de tipo no sql.
//Las bases de datos sql tienen un lenguaje especifico para hacer consultas a las bases de datos. Una query o una consulta son las operaciones CRUD. Se estructuran en tablas
//En las tablas cada nombre de columna es un campo y cada fila un registro. Cada registro tiene su identificador
//Las tablas sql al ser estructuradas importa la estructura de la tabla. Si tengo una tabla con 4 campos no puedo agregar un registro con 5 datos. Y se deben respetar los tipos de datos. Si DNI es un numero no puedo agregar un string.

//Las bases de datos no sql se definen por oposicion, son aquellas que no son sql. La mayoria utilizan el formato JSON. No son estructuradas.
//Las bases de datos no sql tienen colecciones y documentos. Una coleccion tiene un nombre (es una especie de id) y es un conjunto de documentos. La coleccion vendria a ser como las tablas de las bases de datos sql. Cada tabla o cada coleccion refiere en nuestra aplicacion a una entidad.

//Utilizando db tenemos que acceder a la coleccion que vamos a estar utilizando (si no existe la crea). Para agregar algo se utiliza el metodo add. Con el metodo add enviamos un objeto. Add devuelve una promesa, por lo tanto podemos encadenar el metodo then.

//(C)RUD ->

const addTodoHandler = () => {
  //seleccionar la coleccion -> si no existe se crea
  db.collection("todos")
    //agregar el objeto del nuevo documento
    .add({
      task: "Nuevo Todo",
      status: "pending",
    })
    //devuelve una promesa que podemos utilizar para obtener el id del documento creado
    .then((doc) => console.log(doc.id));
};

//C(R)UD -> Read
//Para obtener documentos se utiliza el metodo get. El metodo get devuelve los documentos de la coleccion. En el metodo tenemos el snapshot, es la imagen de la tabla en la coleccion en el momento que hacemos la consulta. Una vez que tenemos el snapshot podemos acceder a docs. Esto devuelve un array, de cada documento podemos acceder a la informacion con el metodo data y al id.
//Leer u obtener todos los documentos de una coleccion

const getAllTodosHandler = () => {
  //definimos la coleccion que queremos buscar
  db.collection("todos")
    //con el metodo get() obtenemos los datos
    .get()
    //devuelve una promesa cuyo valor es una "foto" de la coleccion
    .then((snapshot) =>
      // en la propiedad docs tenemos el array de todos los documentos
      //a cada documento podemos acceder a la informacion mediante el metodo .data() y al id mediante la propiedad .id
      snapshot.docs.map((doc) => <li key={doc.id}>{doc.data}</li>)
    );
};

//C(R)UD -> Read One
//Obtener un documento
//Defino la coleccion, accedemos al documento con el metodo doc que lleva como parametro el id del documento que quiero obtener. Luego con el metodo get lo traemos y con then tenemos la informacion de ese documento

const getTodoHandler = () => {
  //definimos la coleccion que queremos buscar
  db.collection("todos")
    //con el metodo doc le pasamos el id del documento que queremos obtener
    .doc(lastId)
    //con get hacemos la consulta que nos devuelve una promesa con el documento
    .get()
    //en la promesa podemos acceder a la informacion mediante el metodo data()
    .then((doc) => console.log(doc.data()));
};

//CR(U)D -> Update
//Actualizar valores de un documento
//Para actualizar valores debemos acceder a la coleccion, no puedo hacerlo unicamente desde el id porque puede repetirse en distintas tablas. Luego concateno el metodo doc con el id como parametro y finalmente el metodo update. El metodo update toma un objeto con los cambios que queremos hacerle a ese documento.

const completeTodoHandler = () => {
  //con el metodo update le pasamos un objeto con los campos que queremos que se actualicen/agreguen
  db.collection("todos").doc(lastId).update({ status: "completed" });
};

//CRU(D)=> Delete
//Se borra un documento con el metodo delete
const deleteTodoHandler = () => {
  db.collection("todos").doc(lastId).delete();
};

//Firebase tiene un listener que se ejecuta cada vez que hay un cambio en una coleccion y trae un snapshot de la coleccion. Para esto utilizamos un useEffect
//Listener que se activa ante cualquier cambio en la coleccion
//nos devuelve un snapshot que podemos utilizar para actualizar la vista de los datos
useEffect(() => {
  const unsuscribe = db.collection("todos").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => console.log(doc.data(), doc.id));
  });
  //cortamos la conexion o escucha a la coleccion cuando el componente se desmonta
  return () => unsuscribe();
}, []);
