import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAj6KxcNL_E-nFzpapmXcW5-be8gyOxNWE",
    authDomain: "react-crypto-tracker-master.firebaseapp.com",
    projectId: "react-crypto-tracker-master",
    storageBucket: "react-crypto-tracker-master.appspot.com",
    messagingSenderId: "543562105261",
    appId: "1:543562105261:web:5e398e6bfa98334335e124",
    measurementId: "G-84VR9C7ZFV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};