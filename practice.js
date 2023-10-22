const firebaseConfig = {
    apiKey: "AIzaSyB2o9e7Af5FaFwRBnmO7kut4vyanK-3kMo",
    authDomain: "chat-bfa20.firebaseapp.com",
    databaseURL: "https://chat-bfa20-default-rtdb.firebaseio.com",
    projectId: "chat-bfa20",
    storageBucket: "chat-bfa20.appspot.com",
    messagingSenderId: "963379214627",
    appId: "1:963379214627:web:014b102fae23f5b7a33496"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  // Initialize Firebase

//ADICIONE SEUS LINKS FIREBASE

function addUser()
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
purpose : "adding user"
    });
}