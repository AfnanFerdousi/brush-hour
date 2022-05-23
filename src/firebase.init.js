// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs htmlFor Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByD7YetnGy4ajqO2KF4a9sJd4PgheYKV8",
  authDomain: "brush-hour-e2be0.firebaseapp.com",
  projectId: "brush-hour-e2be0",
  storageBucket: "brush-hour-e2be0.appspot.com",
  messagingSenderId: "510095192821",
  appId: "1:510095192821:web:ab109595324540c154cbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;