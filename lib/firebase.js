import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAZFhM__8_yibiEzuGPdVfEUbAeWVUfiBk",
  authDomain: "supermarket-21041.firebaseapp.com",
  projectId: "supermarket-21041",
  databaseURL: "https://supermarket-21041-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "supermarket-21041.appspot.com",
  messagingSenderId: "656940013398",
  appId: "1:656940013398:web:5486438c82264ce985e8f7"
};


// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()


const db = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);


export {db , database, auth, app};
