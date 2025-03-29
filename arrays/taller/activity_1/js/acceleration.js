/*


	date:25/03/2025
*/

let iterationOne;
let iterationTwo;
let accelerationOne;
let acceleration = [];
let values;

const force = [

	[10,5,0],
	[4,-3,2],
	[0,0,6]

];

const mass = [2,4,3];


let total = force.map(raw => raw.map((value, i) => value / mass[i]));

console.log (total);
