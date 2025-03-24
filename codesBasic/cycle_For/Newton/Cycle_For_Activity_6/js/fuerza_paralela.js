/*
	Name exercise: Fuerza paralela
	Description: Simulación de un Objeto en un Plano Inclinado.
	Autor: Emerson Calet Molano Cardozo
	Date: march 23th 2025
*/

let forceParallel;
let mass = 23;
let gravity = 9.81;
let counter = 1;
let counterSelect = 3;
let radianes;
let seno;
let degree = 30;
let forceParallelOne;

for (counter == 1; counter <= counterSelect; counter++){
	forceParallelOne = mass * gravity;
	radianes = (degree * 3.1416)/180;
	seno = radianes - ((radianes**3)/6) + ((radianes**5)/120);
	forceParallel = forceParallelOne * seno;
	console.log ("The force parallel is: " + forceParallel);

}
