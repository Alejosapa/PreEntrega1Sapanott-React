import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, where } from "firebase/firestore";
import { query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALZpS8yEFyWGTy9oAKDXesQVebQ3y8HB8",
    authDomain: "karka-pilchas.firebaseapp.com",
    projectId: "karka-pilchas",
    storageBucket: "karka-pilchas.appspot.com",
    messagingSenderId: "822945308850",
    appId: "1:822945308850:web:5a1d8a60fd44cff0fb29ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { getDocs, query, collection,getDoc, doc, where, db };
