// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyDX8othbDabamM1eWSR3DcqlzBQVDPNOWQ",
        authDomain: "blogapp-e171e.firebaseapp.com",
        projectId: "blogapp-e171e",
        storageBucket: "blogapp-e171e.appspot.com",
        messagingSenderId: "506405470831",
        appId: "1:506405470831:web:6224523cfbce86880ec39a",
        measurementId: "G-6CKL3C2QHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
console.log(analytics)
export default app;