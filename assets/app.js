
// firebaseConfigration

var firebaseConfig = {
    apiKey: "AIzaSyBriYEsnpax18nummPt1PEm5rN6qD0qxx8",
    authDomain: "forclasse-7f050.firebaseapp.com",
    databaseURL: "https://forclasse-7f050.firebaseio.com",
    projectId: "forclasse-7f050",
    storageBucket: "forclasse-7f050.appspot.com",
    messagingSenderId: "1001175965488",
    appId: "1:1001175965488:web:43abd34897d2a813e732f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// click event for add-ship
$("#add-ship").on("click", function (event) {
    event.preventDefault();

    const name = $("#name-input").val().trim();
    const dest = $("#dest-input").val().trim();
    const time = $("#time-input").val().trim();
    const freq = $("#freq-input").val().trim();
    var newShip = {
        name: name,
        destination: dest,
        frequency: freq,
        firstShip: time
    }

    // adding all ships into DB

    database.ref().push(newShip);

// cleaning the text Books
$("#name-input").val("");
$("#dest-input").val("");
$("#time-input").val("");
$("#freq-input").val("");



});

database.ref().on("child_added", function(childSnapshot) {

    var shipName = childSnapshot.val().name;
    var destination = childSnapshot.val().name;
    var frequency = childSnapshot.val().name;
    var firstShipTime = childSnapshot.val().name;
    console.log("first ship time" +firstShipTime)


    var shipDiff = moment().diff(moment(firsTimeConveted), "minutes");
    console.log("diff" +shipDiff);
    var shipRemaider = shipDiff % frequency;


    



})





