function changeWeatherPicture(minTemp, maxTemp) {

  var temp = (minTemp + maxTemp) / 2;
  if (temp > 90) {
    $('#col-box').css('background-image', 'url(assets/images/hot-weather.jpeg)');
  }
  else if (temp > 60) {
    $('#col-box').css('background-image', 'url(assets/images/sun.jpg)');
  }
  else if (temp > 30) {
    $('#col-box').css('background-image', 'url(assets/images/neutral-weather.jpg)');
  }
  else {
    $('#col-box').css('background-image', 'url(assets/images/cold-weather7.png)');
    $('#col-box').css('color', 'white');
    $('#col-box').css('text-shadow', '1px 1px 4px black');
  }
}