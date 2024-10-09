// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-verse-generator.firebaseapp.com",
  projectId: "ai-verse-generator",
  storageBucket: "ai-verse-generator.appspot.com",
  messagingSenderId: "767413203561",
  appId: "1:767413203561:web:83af5f77f9c016d2d328f8",
  measurementId: "G-ZWRLFF1RMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)