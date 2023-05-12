import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAusWT5WjN6B2Ozxh9mgv6w0BJQ2cRqDXs",
  authDomain: "cacto-pet-shop.firebaseapp.com",
  projectId: "cacto-pet-shop",
  storageBucket: "cacto-pet-shop.appspot.com",
  messagingSenderId: "756888022285",
  appId: "1:756888022285:web:9703cd3444db12e9531444"

};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);