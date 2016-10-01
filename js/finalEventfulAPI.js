function findEvents(city, state, startDate, endDate) {
  startDate = new Date(startDate);
  newStartDate = formatDateToString(startDate);
  endDate = new Date(endDate);
  newEndDate = formatDateToString(endDate);

  //Constructs a query URL using the user inputted city, state, and dates
  var queryURL = "https://crossorigin.me/https://api.eventful.com/json/events/search?...&app_key=5zNFnGb75BQD7wd8&location=" + city + "," + state + "&date=" + newStartDate + "-" + newEndDate + "&within=20&ex_category=conference,learning_education,fundraisers,books,support,community,business,schools_alumni,clubs_associations,animals,religion_spirituality&sort_order=popularity";
  $.ajax({url:queryURL,method:"GET"}).done(function(response){
    var parsedResponse = jQuery.parseJSON(response);
    for (var i=0;i<3;i++) {
      var p = i+1;
      if (parsedResponse.events.event[i] != null){
        $("#e" + p).append('<p><a href="' + parsedResponse.events.event[i].url +'" target="_blank">' + parsedResponse.events.event[i].title + '</a></p>'
        + '<p>' + parsedResponse.events.event[i].start_time.substring(0,10) + '</p>');
      }
    }
  });
}

//Formats the dates into the proper format for querying Eventful
function formatDateToString(date) {
  var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
  var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  var yyyy = date.getFullYear();

  return (yyyy + MM + dd + '00');
}