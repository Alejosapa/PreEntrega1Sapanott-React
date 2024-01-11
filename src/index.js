import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const firebaseConfig = {
    apiKey: "AIzaSyALZpS8yEFyWGTy9oAKDXesQVebQ3y8HB8",
    authDomain: "karka-pilchas.firebaseapp.com",
    projectId: "karka-pilchas",
    storageBucket: "karka-pilchas.appspot.com",
    messagingSenderId: "822945308850",
    appId: "1:822945308850:web:5a1d8a60fd44cff0fb29ab"
};

initializeApp(firebaseConfig);
export const db = getFirestore(App);

root.render(<App/>);