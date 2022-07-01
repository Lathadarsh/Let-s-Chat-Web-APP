
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAaCG0CG-HdBoYrNYT0256ZFWbRjO7GnoI",
      authDomain: "kwitter-402eb.firebaseapp.com",
      databaseURL: "https://kwitter-402eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-402eb",
      storageBucket: "kwitter-402eb.appspot.com",
      messagingSenderId: "252507108295",
      appId: "1:252507108295:web:eeb4bab41c40936a091fe2"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.seItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name: " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

//End code
});});}
getData();
function redirectToRoomName(room_name) {
    console.log(room_name);
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}
