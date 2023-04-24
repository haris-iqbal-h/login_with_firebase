// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "react-auth-73b10.firebaseapp.com",
    projectId: "react-auth-73b10",
    storageBucket: "react-auth-73b10.appspot.com",
    messagingSenderId: "<Sender_Id>",
    appId: "<app_id>",
    measurementId: "G-L51KQFV7XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)