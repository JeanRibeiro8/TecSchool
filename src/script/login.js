import { 
  getAuth,
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

const form = document.querySelector(".formlogin");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password)
//IF
    .then((userCredential) => {

      const user = userCredential.user;

      console.log("Welcome " + user.email);

      // REDIRECT
      window.location.href = "dashboard.html";

    })
//ELSE
    .catch((error) => {

      console.log("You are not registered");

    });

});