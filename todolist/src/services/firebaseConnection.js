import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore"

let firebaseConfig = {
  apiKey: "AIzaSyDXLo_6qqEjraijp3tQOaICIU5AUbPLO-o",
  authDomain: "sistema-291e4.firebaseapp.com",
  projectId: "sistema-291e4",
  storageBucket: "sistema-291e4.appspot.com",
  messagingSenderId: "695102058017",
  appId: "1:695102058017:web:ba429da5e81d06297e3d60",
  measurementId: "G-KNZBKV3ZDL"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;