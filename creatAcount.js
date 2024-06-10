
import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


let creatAcountBtn = document.getElementById('Creat')

creatAcountBtn.addEventListener('click', () => {
    // let firstName = document.getElementById('fName').value
    // let lastName = document.getElementById('lName').value
    let userEmail = document.getElementById('email').value
    let userPassword = document.getElementById('password').value

    console.log( userEmail, userPassword);
    //creat with email , password refrence
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // alert("Creat ok")
            console.log("USER======= ",user);
            window.location.href='signin.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode==== ",errorCode);
            console.log("errorMessage==== ",errorMessage);
            // ..
        });
})








