

function findStateDescription(city, state){
			var searchString=state;
			searchString=searchString.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			var descriptions=[];

					//create dates in mm/dd/yyyy format for query string

			var queryURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchString+'&format=json';

			// var queryURL ='http://en.wikipedia.org/w/api.php?action=query&titles='+searchString+'&prop=revisions&rvprop=content&format=json'

			$.ajax({
				url: queryURL,
				method: 'GET',
				dataType: 'jsonp'
			})
				.done(function(response){

					var stateDescription=response[2][0];

					for (var i=0;i<response[1].length;i++){
						if(response[1][i].toLowerCase()==searchString){
							stateDescription=response[2][i];
							descriptions.push(stateDescription);
							console.log(stateDescription);
						}
					}
					$('#description1').html(stateDescription);
				});
}
