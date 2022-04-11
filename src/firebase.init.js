// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPcLs_nbsPOWmNl1Xrf4BwbDk_n-T5buc",
  authDomain: "genius-car-servies.firebaseapp.com",
  projectId: "genius-car-servies",
  storageBucket: "genius-car-servies.appspot.com",
  messagingSenderId: "433581534335",
  appId: "1:433581534335:web:e7fce234926f0c3f15e34a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;