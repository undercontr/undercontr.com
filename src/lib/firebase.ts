import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3B5I6fpf4AqKw2N-knTo59k6HC-XfHtk",
  authDomain: "undercontr-com.firebaseapp.com",
  projectId: "undercontr-com",
  storageBucket: "undercontr-com.appspot.com",
  messagingSenderId: "129770760810",
  appId: "1:129770760810:web:e8f570e2ce940f7ac87813",
  measurementId: "G-P1T41PQYJ0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);