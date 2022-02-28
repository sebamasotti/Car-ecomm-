// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLac9DWeOZP0YKzvldyRswY-sJbBzvsIg",
    authDomain: "car-ecomm.firebaseapp.com",
    projectId: "car-ecomm",
    storageBucket: "car-ecomm.appspot.com",
    messagingSenderId: "1049373695411",
    appId: "1:1049373695411:web:e621b35f30417b3bd77fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;