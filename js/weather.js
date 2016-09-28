

function mmddValidation(number){
	var numberReturn;

	if(number<10){
		numberReturn='0'+number.toString();
	}
	else{
		numberReturn=number.toString();
	}
	return numberReturn;
}



function findWeather(city, state, startDate, endDate){

		var weatherObjects=[],
				dateUserInput1=new Date(startDate),
				dateUserInput2=new Date(endDate),
				dateStart=new Date(),
				dateEnd=new Date();

				//make date lower bound for query string
				dateStart=dateUserInput1;
				dateStart.setDate(dateStart.getDate()-4);

				//make date upper bound for query string
				dateEnd=dateUserInput2;
				dateEnd.setDate(dateEnd.getDate()+4);

		for(var i=0;i<5;i++){
				var locationa='Hillsborough,NJ',
						apiKey='85c53baeaa844aedb85153735162409',
						datestr,
						enddatestr;

						//create dates in mm/dd/yyyy format for query string
						datestr=((dateStart.getFullYear()-(i+1))+'/'+mmddValidation(dateStart.getMonth())+'/'+mmddValidation(dateStart.getDate())).toString();
						enddatestr=((dateEnd.getFullYear()-(i+1))+'/'+	mmddValidation(dateEnd.getMonth())+'/'+mmddValidation(dateEnd.getDate())).toString();

						console.log(datestr);
						console.log(enddatestr);

				var queryURL = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key='+apiKey+'&q='+locationa+'&date='+datestr+'&enddate='+enddatestr+'&format=json';
				console.log(queryURL);
				$.ajax({
					url: queryURL,
					method: 'GET'
				})
					.done(function(response){
						weatherObjects.push(response);
						console.log(weatherObjects);
				});
			}

		var averageHumidity=0,
				averageMaxTemperature=0,
				sumMaxTemperature=0,
				averageMinTemperature=0,
				sumMinTemperature=0,
				denominator=0;

				//calculate sum for temperature
				for (var k=0;i<weatherObjects.length;k++){
					for (var i=0; i<weatherObjects[k]['data']['weather'].length;i++){
						sumMaxTemperature+=weatherObjects[k]['data']['weather'][i]['maxtempF'];
						sumMinTemperature+=weatherObjects[k]['data']['weather'][i]['mintempF'];
						denominator++;
					}
				}
				averageMaxTemperature=sumMaxTemperature/denominator;
				averageMinTemperature=sumMinTemperature/denominator;

}