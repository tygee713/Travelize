
            function cb(data) {
            }

            function findRestaurants(city, state){

                var auth = {
                    //
                    // Update with your auth tokens.
                    //
                    consumerSecret : "V46vTNHtJ8ivYL_ww7slumyZmyU",
                    consumerKey : "_S6oCKn_2fodClSuDP-ExA",
                    accessToken : "2PwZnVBjQOAVC18UyAjNkq0cmKA1eF2N",
                    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
                    // You wouldn't actually want to expose your access token secret like this in a real application.
                    accessTokenSecret : "7en8rMkb7ahcOFnMKj8Q0KcGA_8",
                    serviceProvider : {
                        signatureMethod : "HMAC-SHA1"
                    }
                };
                var selectedRestaurants=[];
                var selectedCategories=[];

                var terms = 'food';
                    //search term
                var near = city+", "+state;

                var accessor = {
                    consumerSecret : auth.consumerSecret,
                    tokenSecret : auth.accessTokenSecret
                };

                var parameters = [];
                parameters.push(['term', terms]);
                parameters.push(['location', near]);
                parameters.push(['callback', 'cb']);
                parameters.push(['oauth_consumer_key', auth.consumerKey]);
                parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
                parameters.push(['oauth_token', auth.accessToken]);
                parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
                parameters.push(['limit',20]);
                parameters.push(['sort_by','rating']);

                var message = {
                    'action' : 'https://api.yelp.com/v2/search',
                    'method' : 'GET',
                    'parameters' : parameters
                };

                OAuth.setTimestampAndNonce(message);
                OAuth.SignatureMethod.sign(message, accessor);

                var parameterMap = OAuth.getParameterMap(message.parameters);

                $.ajax({
                    'url' : message.action,
                    'data' : parameterMap,
                    'dataType' : 'jsonp',
                    'jsonpCallback' : 'cb',
                    'cache': true
                })
                // .done(function(data, textStatus, jqXHR) {
                //         var show='success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']';
                //         $('#bob').append(show);
                //         console.log(show);
                //     }
                // )
                .done(function(response){
                    // cb(response['businesses']);
                    for(var i=0;selectedRestaurants.length<3;i++){
                        if(i==0){
                                selectedRestaurants.push(response['businesses'][i]);

                            for(k=0;k<response['businesses'][i]['categories'].length;k++){
                                selectedCategories.push(response['businesses'][i]['categories'][k].toLowerCase)
                            }
                        }
                        else if(selectedRestaurants.length>0){
                            var isInCategories=false;

                            for(var j=0;j<response['businesses'][i]['categories'].length;j++){
                                if(selectedCategories.indexOf(response['businesses'][i]['categories'][j])>=0){
                                    isInCategories=true;
                                }
                            }
                            if(isInCategories==false){
                                selectedRestaurants.push(response['businesses'][i]);
                            }
                        }
                    }
                    for(var i=0;i<3;i++){
                        var b = $('<div>');
                        b.html("<b>"+selectedRestaurants[i]['name']+"</b>");
                        b.css('font-size',20);
                        b.appendTo($('#restaurant'+(i+1)));
                        $('#restaurant'+(i+1)).append("<b> Rating: "+selectedRestaurants[i]['rating']+"</b><br>");
                        $('#restaurant'+(i+1)).append("<b>"+selectedRestaurants[i]['categories'][0][0]+"</b><br>");
                        var a=$('<img>');
                        a.attr('src', selectedRestaurants[i]['image_url']);
                        a.attr('width',100);
                        a.attr('height',100);
                        $('#restaurant'+(i+1)+'Link').attr('href',selectedRestaurants[i]['url']);
                        a.appendTo($('#restaurant'+(i+1)));
                    }

                    resizeWeather();
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                                    console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                        }
                );
        }