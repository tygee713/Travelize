
//Initializes Firebase to store user input
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

  //Checks form validation before moving to content page
  if ($("#formValidate").valid()) {
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
  }
  return false;

});

//Adds form validation using jquery validate.js plugin
$(document).ready(function() {
  $("#formValidate").validate({
      rules: {
        city: {
            required: true,
            minlength: 3
        },
        state: {
            required: true,
            minlength: 3
        },
        startDate: {
            required: true
        },
        endDate: {
          required: true
        }
      },
        //For custom messages
        messages: {
            state: "Please enter the full state"
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          if (element.attr("name") == "city" ) {
            $("#cityError").html(error);
          }
          else if (element.attr("name") == "state") {
            $("#stateError").html(error);
          }
          else if (element.attr("name") == "startDate") {
            $("#startError").html(error);
          }
          else if (element.attr("name") == "endDate") {
            $("#endError").html(error);
          }
        }
    });
});
