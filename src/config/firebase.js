import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDfvhIXrUChuX7SdoWCNqfPy4EYn2MFloQ",
    authDomain: "to-do-app-83c32.firebaseapp.com",
    databaseURL: "https://to-do-app-83c32.firebaseio.com",
    projectId: "to-do-app-83c32",
    storageBucket: "to-do-app-83c32.appspot.com",
    messagingSenderId: "292332324818",
    appId: "1:292332324818:web:89c36034ebabfd60cbea0b",
    measurementId: "G-XTM0VL3SVP"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);