import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFX7Fvqrr4xLc_Tu7utkwvjCWvYhuJBtQ",
  authDomain: "todo-app-87747.firebaseapp.com",
  projectId: "todo-app-87747",
  storageBucket: "todo-app-87747.appspot.com",
  messagingSenderId: "867837791389",
  appId: "1:867837791389:web:64757e5120445703f25874",
  measurementId: "G-X3F9TNMEY8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);