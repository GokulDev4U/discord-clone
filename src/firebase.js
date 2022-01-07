// import firebase from "firebase";
// import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVS3nT1aocKsRPqqaKbID4gY_qIPT7E5s",
  authDomain: "discord-c2df9.firebaseapp.com",
  projectId: "discord-c2df9",
  storageBucket: "discord-c2df9.appspot.com",
  messagingSenderId: "659176513071",
  appId: "1:659176513071:web:99817844025a803ffaf0da",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage, provider };
