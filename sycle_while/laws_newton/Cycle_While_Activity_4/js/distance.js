/*
	Name exercise: Applied force
	Description: Applied force
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let force = 34;
let aceleration;
let mass = 12;
let acelerationEnd;
let acelerationBegin = 0;
let time = 1;
let counter = 0;
let timeTwo = 0;
let counterSelect = 3;
let distance;

while (force != 0 && counter < counterSelect) {
    counter = counter + 1;
    
	aceleration = force / mass;
    acelerationEnd = acelerationBegin + aceleration * time;
    timeTwo = timeTwo + time;
    distance = (acelerationEnd * time) + (0.5 * aceleration * time ** 2);
 
	console.log("The Acceleration is: " + aceleration);
    console.log("The Acceleration end is: " + acelerationEnd);
    console.log("The distance is: " + distance);
}

console.log ("The total Time is: " + timeTwo);