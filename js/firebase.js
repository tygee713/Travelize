
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCunPXVrDpOYdC4FVJAt2hHYYxaVzkvfZo",
  authDomain: "travelize-9a614.firebaseapp.com",
  databaseURL: "https://travelize-9a614.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "868431341434"
};
firebase.initializeApp(config);

var database = firebase.database();
var key;

database.ref().on("child_added", function(snap) {
  key = snap.key;
  console.log(key);
  localStorage.setItem('Key', key);
});

$("#submit").on("click", function() {
  var startDate = $("#startDate").val();
  var endDate = $("#endDate").val();
  var city = $("#city").val();
  var state = $("#state").val();

  database.ref().push({
    StartDate: startDate,
    EndDate: endDate,
    City: city,
    State: state
  });

  window.location="content.html";
  return false;
});



