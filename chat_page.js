//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyA3xTigke-vIvtLY7gFx7aTfeRpiqMHZMQ",
    authDomain: "c100-6e78c.firebaseapp.com",
    databaseURL: "https://c100-6e78c-default-rtdb.firebaseio.com",
    projectId: "c100-6e78c",
    storageBucket: "c100-6e78c.appspot.com",
    messagingSenderId: "940527800574",
    appId: "1:940527800574:web:9103223b7bd28d058a95af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function send()
{

msg = document.getElementById("msg").value = "";
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
})


document.getElementById("msg").value = "";


}