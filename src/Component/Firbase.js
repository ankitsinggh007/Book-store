// Import the functions you need from the SDKs you need
import { initializeApp,get } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ON83xakqP2u-YTkIdOuDHM_QCEJdgJo",
  authDomain: "bookstore-64555.firebaseapp.com",
  projectId: "bookstore-64555",
  storageBucket: "bookstore-64555.appspot.com",
  messagingSenderId: "924622826157",
  appId: "1:924622826157:web:ee37a39d6e6af9f3a83424",
  measurementId: "G-0FKMP19ZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;