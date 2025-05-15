// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7wubHxBLXTti1PKLaq2Iw2Fx0zGY63Ng",
  authDomain: "coffee-store-apps.firebaseapp.com",
  projectId: "coffee-store-apps",
  storageBucket: "coffee-store-apps.firebasestorage.app",
  messagingSenderId: "260781245239",
  appId: "1:260781245239:web:1ea3391f9e5bcb9de290b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);