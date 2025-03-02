// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFTas7Bt66apsmYiNvVrCxRypk0P09LkU",
  authDomain: "nestify-b252c.firebaseapp.com",
  projectId: "nestify-b252c",
  storageBucket: "nestify-b252c.firebasestorage.app",
  messagingSenderId: "102136126457",
  appId: "1:102136126457:web:477f98912dac9b45a23b28",
  measurementId: "G-68ER7MVP5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);