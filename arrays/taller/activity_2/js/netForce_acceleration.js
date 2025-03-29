
const force = [
	[5,0],
	[-2,3],
	[1,-1]

];

let mass = 2;


let forceNetTwo = force.map(raw => raw.reduce((sum,i) => sum + i, 0));

const suma = forceNetTwo.map(value => value / mass);


console.log ("The acceleratios is: ", suma);