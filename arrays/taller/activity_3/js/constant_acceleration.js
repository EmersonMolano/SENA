/*
    Name exercise: Constant Acceleration
    Description: Calculate the constant acceleration.
    Author: Emerson Calet Molano Cardozo
    Date: March 27th, 2025
*/

const acceleration = [2, -1]; /*aceleracion = a */
const velocityBegin = [4, 0]; /*velocidad inicial = v0 */
const startingPosition = [0, 0];  /*posicion inicial = x0 */
const steps = 5;

/* time = tiempo transcurrido = t*/

for (let time = 1; time <= steps; time ++){
	
	let constantAcceleration = startingPosition.map ((x0, i) => 
		x0 + velocityBegin[i] * time + (1/2) * acceleration[i] * time **2

	);
	console.log ("The Constant Acceleration is: ", constantAcceleration);
};


