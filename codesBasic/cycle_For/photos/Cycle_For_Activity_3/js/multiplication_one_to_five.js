/*
	Name exercise: Multiplication table of 1 to 5
	Description:  Perform the multiplication table of 1 to 5 that multiplies up to 5 
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let counterOne = 1;
let counterTwo = 1;
let validate;
let product;
let buz = 0;
let bas = 0;

for (counterOne == 1; counterOne <= 5; counterOne++){

	counterTwo = counterTwo - counterTwo + 1;

	for (counterTwo ==1; counterTwo <= 5; counterTwo++){

		product = counterOne * counterTwo;
		validate = product % 2;

		if (validate == 0){

			console.log (counterOne + " * " + counterTwo + " = " + product + " Buzz");
			buz = buz + 1;

		}else{

			console.log (counterOne + " * " + counterTwo + " = " + product + " Bass");
			bas = bas + 1;

		}
	}
}

console.log (buz + " even");

console.log (bas + " odd");
