/*
	Name exercise: Mechanical work
	Description: Mechanical work
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let force = 4;
let distance = 6;
let work;
let workNeta = 0;
let counter = 0;
let counterSelect = 2;
let calculations = 0;


while (counter < counterSelect || distance < 0){
	counter = counter + 1;
	work = force * distance;
	workNeta = workNeta + work;
	calculations = calculations + 1;
	console.log ("The work is:" + work);
}
console.log ("Mechanical work has been found: "+ calculations);
console.log ("The Work neta is: "+ workNeta);

