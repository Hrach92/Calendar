// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYP-M1wYqsYCrqZdQzSydBFMxCotfogr8",
  authDomain: "calendar-4a7c8.firebaseapp.com",
  projectId: "calendar-4a7c8",
  storageBucket: "calendar-4a7c8.appspot.com",
  messagingSenderId: "380843061490",
  appId: "1:380843061490:web:c7c3e51d36886abf33a06b",
  measurementId: "G-FKS79WXP5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app };
export default auth;
