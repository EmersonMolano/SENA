/*
	Name exercise: Friction force
	Description: Friction force
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let forceFriction;
let friction = 3;
let mass = 3;
let gravity = 5;
let counter = 1;
let normal;
let counterSelect = 4;

for (counter == 1; counter <= counterSelect; counter++){
	normal = mass * gravity;
	forceFriction = friction * normal;
	console.log ("The friction is: " + forceFriction);
}
