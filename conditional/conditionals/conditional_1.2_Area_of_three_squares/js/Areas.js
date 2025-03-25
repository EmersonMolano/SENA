/*
	Name exercise: Area of three squares
	Description:  Area of three squares
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/


let sideOne = 25;
let sideTwo = 25;
let sideThree = 25;
let areaOne;
let areaTwo;
let areaThree;

areaOne = sideOne*sideOne;
areaTwo = sideTwo*sideTwo;
areaThree = sideThree * sideThree;

if (areaOne == areaTwo && areaTwo == areaThree ){

	console.log ("icual");

	}else if (areaOne == areaTwo && areaOne > areaThree ){

		console.log ("Area One icual Area Two, Area One and Area Two greaters Area Three");

	}else if (areaTwo == areaThree && areaTwo > areaOne ){

		console.log ("Area Two icual Area Three, Area Two and Area Three greater Area One");

	}else if(areaOne == areaThree && areaOne > areaTwo ){

		console.log ("Area One icual Area Three, Area One and Area Three greaters Area Two");

	}else if(areaOne > areaTwo && areaOne > areaThree) {

		console.log ("Area One is greater");

	}else if ( areaTwo > areaOne && areaTwo > areaThree){
	
		console.log ("Area Two is greater");
	
	}else {

		console.log ("Area Three is greater");
	
	}

