const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
 
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCmjRiPNsR6eMsDFLLBQSVa_VDEfnYI5i4",
    authDomain: "notes-app-form.firebaseapp.com",
    projectId: "notes-app-form",
    storageBucket: "notes-app-form.appspot.com",
    messagingSenderId: "885259639511",
    appId: "1:885259639511:web:d96549ff47d07cbdbe6e92",
    measurementId: "G-QL8BDMBX9L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();


  function SignUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise
    .then(() =>{

      document.location.href="index.html";
  
    })
}


function signIn(){
  var email = document.getElementById("EMAIL");
  var password = document.getElementById("PASSWORD");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise
  .then(() =>{

    document.location.href="index.html";

  })
  .catch( (err) =>{
    alert("Wrong Credentials Used");

  });
  
  
}