// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLtvvjHzReLVInEqCOxjm8OdJRBmhsJjk",
  authDomain: "englishlearning-7cbbd.firebaseapp.com",
  projectId: "englishlearning-7cbbd",
  storageBucket: "englishlearning-7cbbd.appspot.com",
  messagingSenderId: "482742237645",
  appId: "1:482742237645:web:e91d551e5e7ef14b1d6c84",
  databaseURL: 'https://englishlearning-7cbbd-default-rtdb.asia-southeast1.firebasedatabase.app',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const providerGG = new GoogleAuthProvider()
// const analytics = getAnalytics(app);
 const storage = getStorage(app);
 const database = getDatabase(app);
export { auth, database, providerGG, storage };

