/*
	Name exercise: Resultant force
	Description: Calculate the resultant force
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let numberTwo = Math.floor(Math.random()*10)+1;


function number(numberTwo) {

	if (numberTwo % 2 == 0){
		return " Even";
	}else{
		return " Odd";
	};
};

console.log ("The number ", numberTwo ," is ", number(numberTwo));