
let n = Math.floor(Math.random()*10) + 1;
let m = Math.floor(Math.random()*10) + 1;
let matriz = Array(n).fill().map(()=> 
	Array(m).fill().map(() => Math.floor(Math.random()*10)+1));

console.log ("Matriz: ", matriz);

let sumaFilas = matriz.map (fila => fila.reduce((horizontal,vertical) => horizontal + vertical, 0 ));

console.log ("Suma de las filas: ", sumaFilas);


let sumaColumnas = Array(m).fill(0).map((_,columnas) => matriz.reduce((acumulador,fila) => acumulador + fila[columnas], 0));

console.log ("Suma de las columnas: ", sumaColumnas);