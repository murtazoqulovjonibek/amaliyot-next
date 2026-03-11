import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-GiVZiQUkTYlLDR1Lcwd63PR96QG81uM",
  authDomain: "amaliyot-next.firebaseapp.com",
  projectId: "amaliyot-next",
  storageBucket: "amaliyot-next.firebasestorage.app",
  messagingSenderId: "434337693916",
  appId: "1:434337693916:web:12bd98ebf7c691e232b419"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);