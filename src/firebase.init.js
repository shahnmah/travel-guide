// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANptImsATVo93Ma2odbUWqEcq7PBkABn0",
  authDomain: "travel-guide-c24c4.firebaseapp.com",
  projectId: "travel-guide-c24c4",
  storageBucket: "travel-guide-c24c4.appspot.com",
  messagingSenderId: "725208089927",
  appId: "1:725208089927:web:db4b3bdda2596d36a6f862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;