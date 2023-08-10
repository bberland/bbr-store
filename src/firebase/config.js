// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvkAVRPOhqSknWoRqroUNCRlZf8mRmigI",
  authDomain: "bbr-store.firebaseapp.com",
  projectId: "bbr-store",
  storageBucket: "bbr-store.appspot.com",
  messagingSenderId: "22725906712",
  appId: "1:22725906712:web:a7f9fcbf0b6a53e18b0e6d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)