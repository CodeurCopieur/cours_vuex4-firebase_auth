import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxHnKhYi4FxxJ0i666GIStrSBRAShtLYs",
  authDomain: "vue-firebase-auth-3dcab.firebaseapp.com",
  projectId: "vue-firebase-auth-3dcab",
  storageBucket: "vue-firebase-auth-3dcab.appspot.com",
  messagingSenderId: "1061226216209",
  appId: "1:1061226216209:web:d3f87a230c76024ad7eab0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//import store from './store/index'

createApp(App).use(router).mount('#app')
