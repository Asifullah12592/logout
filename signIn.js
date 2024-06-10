import { auth } from "./firebase.mjs"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



let signinBtn = document.getElementById('signinBtn')
signinBtn.addEventListener('click',()=>{
    let userEmail =document.getElementById('email').value
    let userPassword =document.getElementById('password').value
    console.log(userEmail,userPassword);


    signInWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("user ====> ",user);
    // alert('signin')
    window.location.href="dataDashboard.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorCode====> ",errorCode);
    console.log("errorMessage====> ",errorMessage);
  });

   


})