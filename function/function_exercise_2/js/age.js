/*
	Name exercise: Age 
	Description: Function that receives a name and age and returns a greeting.
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let age = parseInt(prompt("Ingrese su edad: "));
let name = prompt("Ingrese su nombre: ");

function saludo(age, name){
	
	
	return `Hello ${name}, you are ${age} old`;

}

console.log (saludo(age, name));