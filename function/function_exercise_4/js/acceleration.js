/*
	Name exercise: Acceleration
	Description: Acceleration whit functions
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let force = parseInt(prompt("Enter the force: "));
let mass = parseInt(prompt("Enter the mass: "));


function acceleration(force, mass){

	return `The acceleration is ${force / mass}`;

}

console.log (acceleration(force, mass));