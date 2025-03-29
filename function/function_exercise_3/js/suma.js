/*
	Name exercise: Addition
	Description: addition whit arrays
	Autor: Emerson Calet Molano Cardozo
	Date: march 27th 2025
*/

let number = parseInt(prompt("Ingresa el primer numero: "));
let numberTwo = parseInt(prompt("Ingresa el segundo numero: "));
let addition = [number,numberTwo];

/* let result = addition[0] + addition [1]; */

function total (addition){

	return `The addition of ${addition[0]} and ${addition[1]} is ${addition[0] + addition[1]}`;
	

}

console.log (total(addition));


/*

((value, i) => value.reduce((alue, j) => alue + addition[j]),0);

*/