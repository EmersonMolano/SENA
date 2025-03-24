/*
	Name exercise: Force reaction
	Description: The program will ask for an applied force (F) and display its reaction force.
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/
let force;
let mass = 12;
let aceleration = 12;
let counter = 0;
let counterSelect = 3;
let forceReact= 0;
let calculations;
let forceReactNeta = 0;

while (counter < counterSelect){

	counter = counter +1 ;
	force = mass * aceleration;
	forceReact = forceReact -  (force*2);
	forceReactNeta = forceReactNeta + forceReact;

	console.log ("The force reaction is: " + forceReact);
	
}
calculations = 2 + (counterSelect * 4);
		
console.log ("The force react neta is: "+ forceReactNeta);

console.log ("Calculations have been made: "+ calculations);