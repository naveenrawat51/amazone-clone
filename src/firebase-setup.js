import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCjrUJOEJT_xjhwwy6grAIw1tWdRtZ9CiU",
  authDomain: "e-clone-13a4a.firebaseapp.com",
  databaseURL: "https://e-clone-13a4a.firebaseio.com",
  projectId: "e-clone-13a4a",
  storageBucket: "e-clone-13a4a.appspot.com",
  messagingSenderId: "848436214792",
  appId: "1:848436214792:web:24b455c4fde34a0a21e5bd",
  measurementId: "G-E325T1T6D3",
});

export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();
