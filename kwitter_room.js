
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCN-A8rrNafDtbybmvZ46f-SrFlagHCg6s",
      authDomain: "emeralds-and-rubies-9dac6.firebaseapp.com",
      databaseURL: "https://emeralds-and-rubies-9dac6.firebaseio.com",
      projectId: "emeralds-and-rubies-9dac6",
      storageBucket: "emeralds-and-rubies-9dac6.appspot.com",
      messagingSenderId: "271675446754",
      appId: "1:271675446754:web:1e6951d9a55bde9014d5bb",
      measurementId: "G-901B2PW9MW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
