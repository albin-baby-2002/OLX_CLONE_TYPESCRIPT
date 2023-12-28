import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0T09F2gYuo_EgYNBU-QNPTnrpL4MmBmE",

  authDomain: "fir-6762f.firebaseapp.com",

  projectId: "fir-6762f",

  storageBucket: "fir-6762f.appspot.com",

  messagingSenderId: "538276030346",

  appId: "1:538276030346:web:cb69137795427ae9914a73",

  measurementId: "G-CF9MTKFF24",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
