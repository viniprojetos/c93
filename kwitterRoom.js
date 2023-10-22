const firebaseConfig = {
  apiKey: "AIzaSyB2o9e7Af5FaFwRBnmO7kut4vyanK-3kMo",
  authDomain: "chat-bfa20.firebaseapp.com",
  databaseURL: "https://chat-bfa20-default-rtdb.firebaseio.com",
  projectId: "chat-bfa20",
  storageBucket: "chat-bfa20.appspot.com",
  messagingSenderId: "963379214627",
  appId: "1:963379214627:web:014b102fae23f5b7a33496"
};


 
firebase.initializeApp(firebaseConfig); 

user_name = localStorage.getItem("user_name");
 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 

 localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
 }
  function getData()
   {
     firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
     
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      
      Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
      
    });
    
  }); 
  
}

getData();



function redirectToRoomName(name) 
{
   console.log(name);
    localStorage.setItem("room_name", name);
    
    window.location = "kwitter_page.html";
   }
    function logout()
     { 
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html";
       }
