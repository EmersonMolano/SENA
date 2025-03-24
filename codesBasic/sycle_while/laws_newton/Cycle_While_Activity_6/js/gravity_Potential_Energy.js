/*
	Name exercise: Calculation of Gravitational Potential Energy
	Description: Calculation of Gravitational Potential Energy
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let mass = 12;
let aceleration = 6;
let gravityPotentialEnergy; 
let counter = 0; 
let counterSelect = 3; 
let gravityPotentialEnergyNeta = 0;
let calculations = 0;
let height = 2;

while (counter < counterSelect || height < 0){
	counter = counter + 1;
	gravityPotentialEnergy = mass * aceleration * height;
	gravityPotentialEnergyNeta = gravityPotentialEnergyNeta + gravityPotentialEnergy;
	calculations = calculations + 1;
	console.log ("The Gravity potential energy is: " + gravityPotentialEnergy);
}

console.log ("The Gravity potential energy neta is: "+ gravityPotentialEnergyNeta);

console.log ("The potential energy has been calculated: "+ calculations);