/*
	Name exercise: Net Salary.
	Description: Net Salary.
	Autor: Emerson Calet Molano Cardozo
	Date: march 20th 2025
*/

let daysWorked = 5;
let valueDay = 15000;
let salary;
let discount;
let health;
let pensioner;
let arl;
let netSalary;

salary = daysWorked * valueDay;

health = salary * 0.12;
pensioner = salary * 0.16;
arl = salary * 0.052;

discount = health * pensioner + arl;

netSalary = discount - salary;

console.log ("The Salary is: " + salary);
console.log ("The Health is:" + health);
console.log ("The Pensioner is: " + pensioner);
console.log ("The Arl is: " + arl);
console.log ("The Discount is:" + discount);
console.log ("The Net Salary is:" + netSalary);
