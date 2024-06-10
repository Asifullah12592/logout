import { auth } from "./firebase.mjs";
import { onAuthStateChanged ,signOut , updateEmail} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      alert('wellcom')
      console.log('ok');
      
    }
     else {
      // User is signed out
      // ...
      window.location.href="signIn.html"
    }
  });
let logoutButton =document.getElementById('logout')
logoutButton.addEventListener('click',()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    alert('signout Successful')
  }).catch((error) => {
    // An error happened.
  });
})

// let updateBtn = document.getElementById('update')
// updateBtn.addEventListener('click',async ()=>{
//   let updateE = "asifkhan12345678@gmail.com"

//   await updateEmail(auth.currentUser, updateE).then(() => {
//     // Email updated!
//     // ...
//     alert('new email ===>',updateE)
//   }).catch((error) => {
//     // An error occurred
//     // ...
//     console.log(error);
//   });
  

// })
  