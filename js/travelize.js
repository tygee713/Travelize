
var allValidationPassed=true,
		stateValidation=true,
		cityValidation=true;
var validStates=['ALABAMA',
'ALASKA',
'ARIZONA',
'ARKANSAS',
'CALIFORNIA',
'COLORADO',
'CONNECTICUT',
'DELAWARE',
'FLORIDA',
'GEORGIA',
'HAWAII',
'IDAHO',
'ILLINOIS',
'INDIANA',
'IOWA',
'KANSAS',
'KENTUCKY',
'LOUISIANA',
'MAINE',
'MARYLAND',
'MASSACHUSETTS',
'MICHIGAN',
'MINNESOTA',
'MISSISSIPPI',
'MISSOURI',
'MONTANA',
'NEBRASKA',
'NEVADA',
'NEW HAMPSHIRE',
'NEW JERSEY',
'NEW MEXICO',
'NEW YORK',
'NORTH CAROLINA',
'NORTH DAKOTA',
'OHIO',
'OKLAHOMA',
'OREGON',
'PENNSYLVANIA',
'RHODE ISLAND',
'SOUTH CAROLINA',
'SOUTH DAKOTA',
'TENNESSEE',
'TEXAS',
'UTAH',
'VERMONT',
'VIRGINIA',
'WASHINGTON',
'WEST VIRGINIA',
'WISCONSIN',
'WYOMING']

function stateValidation(input){

	var stateInput=input.toUpperCase();

	for (var i=0; i<validStates.length; i++){
		if(validStates[i]===stateInput){
			return true;
		}
		else if(i==validStates.length-1){
			//test this with the last state in the list and see if works
			return false;
		}
	}
}


$('#submit').click(

	stateValidation=stateValidation($('#state').val());

	if(stateValidation==true){

	}
	else{
		//display error
		allValidationPassed=false;
	}

	if(allValidationPassed===true){


	}



);

