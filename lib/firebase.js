// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyABZxgrM2f-srGeXBc_VjmE_u6pCKfih3w",
authDomain: "personal-portfolio-with-blog.firebaseapp.com",
projectId: "personal-portfolio-with-blog",
storageBucket: "personal-portfolio-with-blog.firebasestorage.app",
messagingSenderId: "950861735933",
appId: "1:950861735933:web:66b7bcb9c7699b84991b94",
measurementId: "G-VG96Y11B8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);