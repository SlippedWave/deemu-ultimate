// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9l0cHJRIy6szumMiWIJdA5MYVMuZYqAo",
  authDomain: "deemu-dev.firebaseapp.com",
  projectId: "deemu-dev",
  storageBucket: "deemu-dev.appspot.com",
  messagingSenderId: "918637074203",
  appId: "1:918637074203:web:d0be0eb481ff04a32625be"

  // apiKey: "AIzaSyDRjotAxKJR8Py-impGsWEH6mCR_Z3Nxq4",
  // authDomain: "deemu-f9.firebaseapp.com",
  // projectId: "deemu-f9",
  // storageBucket: "deemu-f9.appspot.com",
  // messagingSenderId: "899906537346",
  // appId: "1:899906537346:web:dd3f4dccb2a9233b35f19b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();