

 function getPhotoFromFlikr(city){
	var queryUrl="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f7b31512dd196d30b1af5847ccfcb58&tags="+city+"%2C+skyline&tag_mode=all&text="+city+"&accuracy=11&per_page=1&page=1&format=json&nojsoncallback=1"
	$.ajax({url:queryUrl,method:"GET"}).done(function(response){
		console.log(response)
    var pictureUrl= "https://farm"+response.photos.photo[0].farm+".staticflickr.com/"+response.photos.photo[0].server+"/"+response.photos.photo[0].id+"_"+response.photos.photo[0].secret+".jpg"
    console.log(pictureUrl)
	});
}

getPhotoFromFlikr('New York');