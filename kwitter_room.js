var firebaseConfig = {
      apiKey: "AIzaSyDJ-pTeTgegdcNWWJQ4Ob7RDScmYagvwQI",
      authDomain: "kwitterdatabase-8989b.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-8989b-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-8989b",
      storageBucket: "kwitterdatabase-8989b.appspot.com",
      messagingSenderId: "488655189027",
      appId: "1:488655189027:web:3d04195fb3e00b13306d96"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("username").innerHTML="Welcome "+ user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function add_room()
      {
            room_name=document.getElementById("room_name").value;

      }
      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      window.location="index.html";
}