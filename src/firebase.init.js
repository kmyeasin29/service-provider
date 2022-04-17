// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAU8GkD-5yiEMDZe4Xdn0DWolbnAbDYCk",
  authDomain: "john-dental-care.firebaseapp.com",
  projectId: "john-dental-care",
  storageBucket: "john-dental-care.appspot.com",
  messagingSenderId: "151207496317",
  appId: "1:151207496317:web:ba24533e7fb56a94b7bf14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;