/*
	Name exercise: Force Neta
	Description: Create a flowchart that requests a mass (m) and acceleration (a) and calculate the force (F) by applying the formula.
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let mass = 12;
let aceleration = 12;
let force;
let counter = 0;
let counterSelect = 3;
let forceNeta = 0;
let calculations;

while (counter < counterSelect){
	if (mass < 0 && aceleration < 0){
		/* aqui no va nada */
	}else {
		counter = counter +1 ;
		force = mass * aceleration;
		forceNeta = forceNeta + force;
		console.log ("The force is: " + force);
	}
}
calculations = 2 + (counterSelect * 3);
		
console.log ("The force neta is: "+ forceNeta);

console.log ("Calculations have been made: "+ calculations);