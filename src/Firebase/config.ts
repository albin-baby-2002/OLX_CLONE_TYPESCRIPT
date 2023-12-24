import firebase from "firebase/compat/app";

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

export const Firebase = firebase.initializeApp(firebaseConfig);
