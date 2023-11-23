
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYT7WltFHEug7ZUjfIsZVkRQ2iXmK1xOM",
  authDomain: "blood-donation-28936.firebaseapp.com",
  projectId: "blood-donation-28936",
  storageBucket: "blood-donation-28936.appspot.com",
  messagingSenderId: "956344226299",
  appId: "1:956344226299:web:e8740d839b824402623b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 