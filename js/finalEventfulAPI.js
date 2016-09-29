function findEvents(city, state, startDate, endDate) {
  startDate = new Date(startDate);
  newStartDate = formatDateToString(startDate);
  endDate = new Date(endDate);
  newEndDate = formatDateToString(endDate);

  var queryURL = "https://crossorigin.me/https://api.eventful.com/json/events/search?...&app_key=5zNFnGb75BQD7wd8&location=" + city + "," + state + "&date=" + newStartDate + "-" + newEndDate + "&within=30";
  $.ajax({url:queryURL,method:"GET"}).done(function(response){
    var parsedResponse = jQuery.parseJSON(response);
    for (var i=0;i<3;i++) {
      var p = i+1;
      if (parsedResponse.events.event[i] != null){
        $("#e" + p).append('<p>' + parsedResponse.events.event[i].title + '</p>'
        + '<p>' + parsedResponse.events.event[i].start_time.substring(0,10) + '</p>' + '<p>' + parsedResponse.events.event[i].url + '</p>');
      }
    }
  });
}

function formatDateToString(date){
   var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
   var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
   var yyyy = date.getFullYear();

   return (yyyy + MM + dd + '00');
}