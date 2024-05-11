// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoMW8-m75yk5uTa-ga7w5YZ7GzTap0iUs",
  authDomain: "netflixgpt-a6e5d.firebaseapp.com",
  projectId: "netflixgpt-a6e5d",
  storageBucket: "netflixgpt-a6e5d.appspot.com",
  messagingSenderId: "353259568516",
  appId: "1:353259568516:web:9ac0fd75fdaf09b34df1d1",
  measurementId: "G-PSHD0L1PSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();