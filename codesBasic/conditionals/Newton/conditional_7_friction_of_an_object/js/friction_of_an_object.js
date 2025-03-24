/*
	Name exercise: Friction of an object
	Description:  Friction of an object
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/


let mass = 8;
let aceleration = 2;
let force;
let friction = 2;
let forceFriction;

force = mass * aceleration;

forceFriction = friction * force;

if (forceFriction > 50){

	console.log ("Friction high");

}else {

	console.log ("Friction is low");

}


console.log (force);
console.log (forceFriction);