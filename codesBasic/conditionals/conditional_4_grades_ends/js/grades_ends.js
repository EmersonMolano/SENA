/*
	Name exercise: Grades Ends
	Description:  Grades Ends
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/

let gradeOne = 3.5;
let gradeTwo = 3.0;
let gradeThree = 4.5;
let gradeOnePercent;
let gradeTwoPercent;
let gradeThreePercent;
let gradeEnd;

gradeOnePercent = gradeOne * 0.2;
gradeTwoPercent = gradeTwo * 0.35;
gradeThreePercent = gradeThree * 0.45;

gradeEnd = gradeOnePercent + gradeTwoPercent + gradeThreePercent;

if (gradeEnd > 4.5){

	console.log ("High Grade");

}else if(gradeEnd < 3){

	console.log ("Low Grade");

}else if (gradeEnd < 3.5){
	console.log ("Good Grades");

}else {
	console.log ("Medium Grade");

}

console.log ("Grade final = " + gradeEnd);