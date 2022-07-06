// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtSiTjW5uidNwk5diwm7damM13Yc9svUU",
    authDomain: "bicycle-warehouse-f81f4.firebaseapp.com",
    projectId: "bicycle-warehouse-f81f4",
    storageBucket: "bicycle-warehouse-f81f4.appspot.com",
    messagingSenderId: "440699682385",
    appId: "1:440699682385:web:f91bbbc2e7d6aff5d88270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
