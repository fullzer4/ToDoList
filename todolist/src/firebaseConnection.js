import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; //banco de dados
import "firebase/compat/auth" //autenticacao

let firebaseConfig = {
    apiKey: "AIzaSyDsdj1DtDOJ0baEAJXJAZsM3b61zA_L-Aw",
    authDomain: "todolist-yfullzer4.firebaseapp.com",
    projectId: "todolist-yfullzer4",
    storageBucket: "todolist-yfullzer4.appspot.com",
    messagingSenderId: "445827475165",
    appId: "1:445827475165:web:a0c6254eb16d4d6fa55d34",
    measurementId: "G-X10QJYRWP4"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;