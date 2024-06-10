
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCz-vXANkisu2HyRWl9AOrkA48XoitUR10",
    authDomain: "sign-up-form-e16f3.firebaseapp.com",
    projectId: "sign-up-form-e16f3",
    storageBucket: "sign-up-form-e16f3.appspot.com",
    messagingSenderId: "383303499948",
    appId: "1:383303499948:web:4ae19b19db1a3437335f09" // used in first  sign in page 
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  
