// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKpU9ipEcb5tI5aio9YHkscGbIOcsbKEE",
  authDomain: "project-5reactjs.firebaseapp.com",
  projectId: "project-5reactjs",
  storageBucket: "project-5reactjs.appspot.com",
  messagingSenderId: "986484774987",
  appId: "1:986484774987:web:aae0296a15319ff173d5ce",
  measurementId: "G-4BPQSGE3ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);