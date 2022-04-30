// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBydJzHAPbOHaUM4EUr59onOG1AbOmhbWg",
  authDomain: "springdbclone.firebaseapp.com",
  projectId: "springdbclone",
  storageBucket: "springdbclone.appspot.com",
  messagingSenderId: "569998730170",
  appId: "1:569998730170:web:fade54c782e014277a3383",
  measurementId: "G-VNV0JJ3RCR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);
// const storage = app.storage();
export {auth, storage};