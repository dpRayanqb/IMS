
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYuROPGZhuJ1kRC2KBghTxGKYZ-u4_nD8",
    authDomain: "form-c5ed7.firebaseapp.com",
    databaseURL: "https://form-c5ed7.firebaseio.com",
    projectId: "form-c5ed7",
    storageBucket: "form-c5ed7.appspot.com",
    messagingSenderId: "770233709185",
    appId: "1:770233709185:web:1343e9d048cf3f7b9f5380"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Sign Up");
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    if(promise.catch){
      promise.catch(e => alert(e.message));
    }
      
  }

  function signOut(){
      auth.signOut();
      alert(" Signed Out");
      window.location = "new.html";
  }
  
