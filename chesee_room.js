var firebaseConfig = {
    apiKey: "AIzaSyAcSwMqXHTR0m8KdyujPjPzRRaxGbRvO2Y",
    authDomain: "kwitter-5dc54.firebaseapp.com",
    databaseURL: "https://kwitter-5dc54-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-5dc54",
    storageBucket: "kwitter-5dc54.appspot.com",
    messagingSenderId: "35789957756",
    appId: "1:35789957756:web:0c1f288b3b094a2d5a77f9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}