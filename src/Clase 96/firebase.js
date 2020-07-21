import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA6fIhDAkxPnsZxQJhjKc36DZcfe6gyVws",
  authDomain: "ejemplo-clase-d499b.firebaseapp.com",
  databaseURL: "https://ejemplo-clase-d499b.firebaseio.com",
  projectId: "ejemplo-clase-d499b",
  storageBucket: "ejemplo-clase-d499b.appspot.com",
  messagingSenderId: "147767238600",
  appId: "1:147767238600:web:073de31599576d2f512afd",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
