import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcpcPAxh5fOlKkZzQWS4nsovaCF9N4Xxs",
  authDomain: "tecschool-60ba1.firebaseapp.com",
  projectId: "tecschool-60ba1",
  storageBucket: "tecschool-60ba1.firebasestorage.app",
  messagingSenderId: "138044116818",
  appId: "1:138044116818:web:0ca2043629947bf801748b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if(password !== confirmPassword){

    alert("Passwords do not match");
    return;

  }

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      alert("Account created successfully!");

      window.location.href = "login.html";

    })

    .catch((error) => {

      alert(error.message);

    });

});