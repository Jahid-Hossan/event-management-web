// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEjtY8utjCX1amDmBosMgIzv5Kw2NVk8E",
    authDomain: "event-management-11bdc.firebaseapp.com",
    projectId: "event-management-11bdc",
    storageBucket: "event-management-11bdc.appspot.com",
    messagingSenderId: "1047748912614",
    appId: "1:1047748912614:web:00e5dca79fa1cdd4f6e227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

