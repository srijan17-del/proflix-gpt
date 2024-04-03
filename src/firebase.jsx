// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzUyy-OiK8N2HlykGIo9PUqhphs9LZMp4",
  authDomain: "proflixgpt.firebaseapp.com",
  projectId: "proflixgpt",
  storageBucket: "proflixgpt.appspot.com",
  messagingSenderId: "465740978167",
  appId: "1:465740978167:web:d99d8c851a1aafc693c0f2",
  measurementId: "G-NFR10Y3DCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
