import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzpelcOrBPeifupPmLg0amvE68QSIpFWI",
  authDomain: "recipeapp-de82d.firebaseapp.com",
  projectId: "recipeapp-de82d",
  storageBucket: "recipeapp-de82d.firebasestorage.app",
  messagingSenderId: "606864064335",
  appId: "1:606864064335:web:7771dbb2f79959c4160f3a",
  measurementId: "G-XHWD7WBYY7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
