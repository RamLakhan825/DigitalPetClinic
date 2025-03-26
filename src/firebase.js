import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP7Uxp50J6thVImoYm_bmZo7qI7y1yzek",
  authDomain: "vetonline-ac53d.firebaseapp.com",
  projectId: "vetonline-ac53d",
  storageBucket: "vetonline-ac53d.firebasestorage.app",
  messagingSenderId: "331843827651",
  appId: "1:331843827651:web:45d4c3a8607908d30baf76",
  measurementId: "G-6JJTNJ3JSJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db; 