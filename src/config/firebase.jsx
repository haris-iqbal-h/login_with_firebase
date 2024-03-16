// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGettw_4TmZycLQqVzUfRwRHqV1_SfVL0",
    authDomain: "react-auth-73b10.firebaseapp.com",
    projectId: "react-auth-73b10",
    storageBucket: "react-auth-73b10.appspot.com",
    messagingSenderId: "1018178895050",
    appId: "1:1018178895050:web:d6cffc1e94ce74424dc833",
    measurementId: "G-L51KQFV7XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)