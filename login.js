import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBOelngm8O-pgMGJW8VjTyXOVM6MlMmVHE",
    authDomain: "facebook-clone-c5658.firebaseapp.com",
    projectId: "facebook-clone-c5658",
    storageBucket: "facebook-clone-c5658.appspot.com",
    messagingSenderId: "142161396024",
    appId: "1:142161396024:web:1085aa5d10c0091ac141cd",
    measurementId: "G-7ETH2ED01H"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const loginEmail = document.querySelector('#staticEmail')
const loginPassword = document.querySelector('#inputPassword')

const loginBtn = document.querySelector('#login')
console.log(loginBtn);

loginBtn.addEventListener('click', loginHandler)

function loginHandler() {
    signInWithEmailAndPassword(auth, loginEmail.value, inputPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user) {
                window.location.href = 'dashboard.html'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        });
}