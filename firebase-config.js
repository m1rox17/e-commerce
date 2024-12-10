import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQzv5Rz9oQ5JLAO_WQ--1KyX5uWO57wAY",
  authDomain: "e-commerce-5e091.firebaseapp.com",
  projectId: "e-commerce-5e091",
  storageBucket: "e-commerce-5e091.firebasestorage.app",
  messagingSenderId: "12443250588",
  appId: "1:12443250588:web:bb18c61632109ec1bf6259",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
