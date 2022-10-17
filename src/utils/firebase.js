import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA09HVX9Gx9Ust-5ybT5WEEh-9m_bvOo58",
  authDomain: "qcisales.firebaseapp.com",
  projectId: "qcisales",
  storageBucket: "qcisales.appspot.com",
  messagingSenderId: "732429676352",
  appId: "1:732429676352:web:01efa5d9007047976654a5"
};

export const initFirebase = initializeApp(firebaseConfig);