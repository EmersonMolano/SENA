/*
	Name exercise: Do multiplication tables from 1 to 5 and multiply up to five.
	Description: Do multiplication tables from 1 to 5 and multiply up to five.
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/

let product;
let counterOne = 0;
let counterTwo = 0;
let numberOne = 5;
let evenOne;
let oddTwo;
let validate;

while (counterOne < numberOne) {
	counterTwo = counterTwo - counterTwo;
	counterOne = counterOne + 1;

	while (counterTwo < numberOne){
		
		counterTwo = counterTwo + 1;
		product = counterOne * counterTwo;
		console.log (counterOne + " * " + counterTwo + " = " + product);
		validate = product % 2;
		
		if (validate ==0){

			console.log ("Buzz");
			evenOne = evenOne + 1;

		}else{

			console.log ("Bass");
			oddTwo = oddTwo + 1;

		}
	}

}