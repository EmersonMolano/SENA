/*
	Name exercise: Two bodies in free fall
	Description:  Two bodies in free fall
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/

let massOne;
let massTwo;
let weightOne = 22;
let weightTwo = 42;
let aceleration = 9.81;

massOne = weightOne / aceleration;
massTwo = weightTwo / aceleration;

if (massOne == massTwo){ 

	console.log ("Iqual");

}else if(massOne<massTwo){

	console.log ("Mass Two is greater");

}else{

	console.log ("Mass One is greater");

}