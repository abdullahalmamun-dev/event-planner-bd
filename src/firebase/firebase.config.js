// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpswI9StCNwbjG-YgPmZSd52wi_paB7vw",
  authDomain: "event-planner-bd-657bc.firebaseapp.com",
  projectId: "event-planner-bd-657bc",
  storageBucket: "event-planner-bd-657bc.appspot.com",
  messagingSenderId: "748650958494",
  appId: "1:748650958494:web:1a1265f80440e6dcf6f58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;