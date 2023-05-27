import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZuC9u1FfQjf_pBGBdOT_NQVkLJNqLRak",
  authDomain: "waqar-f19e5.firebaseapp.com",
  projectId: "waqar-f19e5",
  storageBucket: "waqar-f19e5.appspot.com",
  messagingSenderId: "558616597436",
  appId: "1:558616597436:web:361a69439ecefe543551b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);