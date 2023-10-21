import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7qowOdCnCiVTWb8e8EVCHTAitB-wDKJ8",
  authDomain: "react-firebase-blog-app-595df.firebaseapp.com",
  projectId: "react-firebase-blog-app-595df",
  storageBucket: "react-firebase-blog-app-595df.appspot.com",
  messagingSenderId: "744642028247",
  appId: "1:744642028247:web:3f3bfb07c447236d77c692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };