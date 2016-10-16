/*	
	Implenta NumeroPrimo que pida un número e indique si es primo o no.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

let esPrimo = function (numero){
	var primo=true;
	for(let i=2;i<numero;i++){
		if(numero%i==0){
			primo=false;
			break;
		}
	}
	return primo;
}

var numero = prompt("Introduzca un número: ");

if(isNaN(numero)){
	console.log("Error. No has introducido un número");
}
else{
	if(esPrimo(numero)) {
		console.log("El número es primo");
	}
	else {
		console.log("El número no es primo");
	}
}