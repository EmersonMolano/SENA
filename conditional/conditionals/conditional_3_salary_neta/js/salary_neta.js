/*
	Name exercise: Salary Neta
	Description:  Salary Neta
	Autor: Emerson Calet Molano Cardozo
	Date: march 19th 2025
*/

let totalSalary;
let salary = 1765400;
let minimunWage = 1423500;
let healt;
let pension;
let arl;
let salaryTransport;

healt = salary * 0.12;

arl = salary * 0.0052;

pension = salary * 0.16;

if (salary < minimunWage) {

		salaryTransport = salary + 114000;

	if (salaryTransport > (minimunWage * 4)){

		totalSalary = (salaryTransport * 0.04) + healt + arl + pension;

	}else{
	
		totalSalary = salaryTransport+ healt + arl + pension;

	}

}else{


	if (salary > (minimunWage * 4)){
	
	totalSalary = (salary * 0.04) + healt + arl + pension;
	
	}else {

	totalSalary = salary + healt + arl + pension;

	}
}

console.log (totalSalary);