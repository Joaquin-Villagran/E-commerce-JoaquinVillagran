import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC56ZUzmVzpyeVo1veXihbQE7Au3OnD3mE",
  authDomain: "supermercado-8107a.firebaseapp.com",
  projectId: "supermercado-8107a",
  storageBucket: "supermercado-8107a.appspot.com",
  messagingSenderId: "760344164511",
  appId: "1:760344164511:web:9564a29c342f720ce60aaa",
});
if (!firebase.apps.length) {
  firebase.initializeApp(app);
} 


export const getFirestore = () => {
  firebase.database(app);
};
