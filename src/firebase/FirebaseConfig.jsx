// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsmyS5kQ7fhWDYP9YhLqz2ejb1tMHHu48",
  authDomain: "myfirstapp-ab0c0.firebaseapp.com",
  projectId: "myfirstapp-ab0c0",
  storageBucket: "myfirstapp-ab0c0.appspot.com",
  messagingSenderId: "834813134344",
  appId: "1:834813134344:web:e37b02e58db1e2306fb3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};