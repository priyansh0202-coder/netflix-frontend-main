import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDBkBsxz55Nd35Nlt7y2M58JNt2G_0wHfo",
  authDomain: "react-netflix-clone-64202.firebaseapp.com",
  projectId: "react-netflix-clone-64202",
  storageBucket: "react-netflix-clone-64202.appspot.com",
  messagingSenderId: "753441374673",
  appId: "1:753441374673:web:48f6237470f9592dc7e0f0",
  measurementId: "G-NM9J0NSYLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
