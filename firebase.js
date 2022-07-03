// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: "facebookclone-ed8b5.firebaseapp.com",
  projectId: "facebookclone-ed8b5",
  storageBucket: "facebookclone-ed8b5.appspot.com",
  messagingSenderId: "25058122999",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore(app);
const auth = app.auth;
const storage = firebase.storage(app);

export { db, storage };
