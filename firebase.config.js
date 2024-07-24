// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARQ2s68yC5o1fgVjSG8QVb7-hlhjmLG7U",
  authDomain: "garage-inventory-81659.firebaseapp.com",
  projectId: "garage-inventory-81659",
  storageBucket: "garage-inventory-81659.appspot.com",
  messagingSenderId: "866383758758",
  appId: "1:866383758758:web:e93b43b7d1ac59a9603b67",
  measurementId: "G-X5FBYWBWK2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app)

export { db }
