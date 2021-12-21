// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFouU1xcTEitcWgY85dsvunN0k3ZrcGg",
  authDomain: "vuex-fb-auth-blog.firebaseapp.com",
  projectId: "vuex-fb-auth-blog",
  storageBucket: "vuex-fb-auth-blog.appspot.com",
  messagingSenderId: "725711047627",
  appId: "1:725711047627:web:05fc89da9ac406d543444e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firebase

const auth = getAuth();

export {auth}