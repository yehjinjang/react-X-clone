import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtjqarp5AU-3eStito3LLgGubYxwfvkTg",
  authDomain: "x-reloaded-d26ac.firebaseapp.com",
  projectId: "x-reloaded-d26ac",
  storageBucket: "x-reloaded-d26ac.firebasestorage.app",
  messagingSenderId: "219844408065",
  appId: "1:219844408065:web:8ab66782bb18686eb62100"
};
// initialize firebase and getting the auth object
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);