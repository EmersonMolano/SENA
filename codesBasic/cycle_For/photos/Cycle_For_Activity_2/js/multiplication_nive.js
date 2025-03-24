/*
	Name exercise: Multiplication table of 9
	Description:  Perform the multiplication table of 9 that multiplies up to 5 
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let number = 9;
let counter = 1;
let validate;
let product = 3;


for (counter == 1; counter <= 5; counter++ ){
	product = number * counter;
	validate = product % 2;
	if (validate == 0){
		console.log (number + " * " + counter + " = " + product + " even");
	}else{
		console.log (number + " * " + counter + " = " + product + " odd");
	}
	
}