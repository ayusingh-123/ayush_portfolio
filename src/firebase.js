import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCY5HUG_LATR_cMualdUVNISNa2i2mFi8o",
  authDomain: "ayuv-portfolio.firebaseapp.com",
  projectId: "ayuv-portfolio",
  storageBucket: "ayuv-portfolio.appspot.com",
  messagingSenderId: "386332322987",
  appId: "1:386332322987:web:b1c491dc45bd3d1e675bee",
  measurementId: "G-460KWHQNQP"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();