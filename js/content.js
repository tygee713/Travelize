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
  city = city.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  state = snapshot.val().State;
  state = state.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  startDate = snapshot.val().StartDate;
  endDate = snapshot.val().EndDate;
  findWeather(city, state, startDate, endDate);
  getPhotoFromFlikr(city);
  findRestaurants(city,state);
  resizeWeather();
  findStateDescription(city,state);
  findEvents(city, state, startDate, endDate);
  $('#location').html(city+', '+state);
});