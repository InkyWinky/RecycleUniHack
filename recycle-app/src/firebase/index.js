// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBpyHsA_rouNGEd8XP-SuLK-SrBh5PS8g",
  authDomain: "recyclingapp-342421.firebaseapp.com",
  projectId: "recyclingapp-342421",
  storageBucket: "recyclingapp-342421.appspot.com",
  messagingSenderId: "291494438885",
  appId: "1:291494438885:web:20b5fae9a6221cdf5df10c",
  measurementId: "G-F7CF1P45LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}