// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzCMW_bW09fhza8Pr7wobDzBFqZnmgw8",
  authDomain: "chat-10b1c.firebaseapp.com",
  projectId: "chat-10b1c",
  storageBucket: "chat-10b1c.appspot.com",
  messagingSenderId: "305301984828",
  appId: "1:305301984828:web:2a6173aca3c74592725539"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()