
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-f90c0.firebaseapp.com",
  projectId: "fir-f90c0",
  storageBucket: "fir-f90c0.firebasestorage.app",
  messagingSenderId: "702385272798",
  appId: "1:702385272798:web:f0b99a0f89f6fff8d48f4f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}