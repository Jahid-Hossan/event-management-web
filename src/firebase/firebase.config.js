// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByC7QPogO2VwcgLu92wWq8LL1_p7N9Sx8",
    authDomain: "event-management-ddc67.firebaseapp.com",
    projectId: "event-management-ddc67",
    storageBucket: "event-management-ddc67.appspot.com",
    messagingSenderId: "263284755874",
    appId: "1:263284755874:web:9c0cd6aec5b243e498f6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;