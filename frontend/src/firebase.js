// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "automate-demo-fedd0.firebaseapp.com",
  projectId: "automate-demo-fedd0",
  storageBucket: "automate-demo-fedd0.firebasestorage.app",
  messagingSenderId: "564401997759",
  appId: "1:564401997759:web:d5c32bb68026786b4ec30a"
 
 
 
 

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

