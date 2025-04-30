import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDI5ej6tqxThv804hwIOTgc19HmTrl7OHs",
  authDomain: "locationapp-6e8ff.firebaseapp.com",
  projectId: "locationapp-6e8ff",
  storageBucket: "locationapp-6e8ff.firebasestorage.app",
  messagingSenderId: "936712982872",
  appId: "1:936712982872:web:59f2ec1b602155b0d4d52d",
  measurementId: "G-FH1KQ1QNC1"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

export { firestore }; 