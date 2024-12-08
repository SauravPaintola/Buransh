// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ217R689iieYX69NsKgUlalLzQAzcvGQ",
  authDomain: "buransh-c3446.firebaseapp.com",
  projectId: "buransh-c3446",
  storageBucket: "buransh-c3446.appspot.com",
  messagingSenderId: "159000718434",
  appId: "1:159000718434:web:d93ebecf3179f64274b53b",
  measurementId: "G-83N8FVBB0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { storage };
