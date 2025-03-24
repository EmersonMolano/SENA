/*
	Name exercise: Multiplication table of 9
	Description: Make the 9 times table that multiplies up to 5 and from the results print the results that are even and that results that are not odd.
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/

let number = 9;
let counter = 0;
let validate;
let product;
let numberTwo = 5;

while (counter < numberTwo){
	counter = counter + 1;
	product = counter * number;
	validate = product % 2;
	
	if (validate == 0) {

		console.log ( number + " * " + counter + " = " + product + " even");	

	}else {

		console.log (number + " * " + counter + " = " + product + " odd");
	
	}

}