import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOelngm8O-pgMGJW8VjTyXOVM6MlMmVHE",
  authDomain: "facebook-clone-c5658.firebaseapp.com",
  projectId: "facebook-clone-c5658",
  storageBucket: "facebook-clone-c5658.appspot.com",
  messagingSenderId: "142161396024",
  appId: "1:142161396024:web:1085aa5d10c0091ac141cd",
  measurementId: "G-7ETH2ED01H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#inputPassword')

const signupBtn = document.querySelector('#signup')
const signupemail = document.querySelector('#recipient-email')
const signuppassword = document.querySelector('#recipient-pass')

signupBtn.addEventListener('click', signupHandler)

function signupHandler() {
    createUserWithEmailAndPassword(auth, signupemail.value, signuppassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                console.log("user registered successfully, going to save data now")
                addUserHandler()
                // window.location.href = 'login.html'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
}

async function addUserHandler() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: username.value,
            email: email.value
        });
        console.log("Document written with ID: ", docRef.id);
        if (docRef.id) {
            console.log("document is saved")
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 5000)
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}