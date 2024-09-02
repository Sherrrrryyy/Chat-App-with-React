// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JYDm57RvfaeMuV3N9PQHz-G6P8TvdxA",
  authDomain: "todo-app-with-signup-and-login.firebaseapp.com",
  projectId: "todo-app-with-signup-and-login",
  storageBucket: "todo-app-with-signup-and-login.appspot.com",
  messagingSenderId: "848711229184",
  appId: "1:848711229184:web:73eb12dd75858978e81de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {app, auth, createUserWithEmailAndPassword }