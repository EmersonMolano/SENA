/*
	Name exercise: Weight Calculation on Different Planets
	Description: Weight Calculation on Different Planets
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let mass = 12;
let aceleration = 12;
let weight;
let counter = 0;
let calculations;
let weightNeta = 0;
let counterSelect = 3;

while (counter < counterSelect){
	if (mass < 0){
		/* aqui no va nada */
	}else {
		counter = counter +1 ;
		weight = mass * aceleration;
		weightNeta = weightNeta + weight;
		console.log ("The weight is: " + weight);
	}
}
calculations = 2 + (counterSelect * 3);
		
console.log ("The weight neta is: "+ weightNeta);

console.log ("Calculations have been made: "+ calculations);