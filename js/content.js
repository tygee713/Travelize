var config = {
  apiKey: "AIzaSyCunPXVrDpOYdC4FVJAt2hHYYxaVzkvfZo",
  authDomain: "travelize-9a614.firebaseapp.com",
  databaseURL: "https://travelize-9a614.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "868431341434"
};
firebase.initializeApp(config);

database = firebase.database();

var key = localStorage.getItem('Key');
var city,
    state,
    startDate,
    endDate;

database.ref('/' + key).on("value", function(snapshot) {
  city = snapshot.val().City;
  state = snapshot.val().State;
  startDate = snapshot.val().StartDate;
  endDate = snapshot.val().EndDate;
  findWeather(city, state, startDate, endDate);
  getPhotoFromFlikr(city);
});

