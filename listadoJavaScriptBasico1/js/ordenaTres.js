/*	
	Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
	mayor.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let ordenaTres=function() {

		let num1=parseInt(prompt("Introduzca el primer número: "));
		let num2=parseInt(prompt("Introduzca el segundo número: "));
		let num3=parseInt(prompt("Introduzca el tercer número: "));

		if(num1>num2 && num1>num3 && num2>num3){
			console.log("Los numeros de mayor a menor son: " + num1 + " " + num2 +" " + num3);
		}
		else if(num1>num2 && num1>num3 && num2<num3){
			console.log("Los numeros de mayor a menor son: " + num1 + " " + num3 +" " + num2);
		}
		else if(num2>num1 && num2>num3 && num1>num3){
			console.log("Los numeros de mayor a menor son: " + num2 + " " + num1 +" " + num3);
		}
		else if(num2>num1 && num2>num3 && num1<num3){
			console.log("Los numeros de mayor a menor son: " + num2 + " " + num3 +" " + num1);
		}
		else if(num3>num1 && num3>num2 && num1>num2){
			console.log("Los numeros de mayor a menor son: " + num3 + " " + num1 +" " + num2);
		}
		else if(num3>num1 && num3>num2 && num1<num2){
			console.log("Los numeros de mayor a menor son: " + num3 + " " + num2 +" " + num1);
		}
	}

	ordenaTres();
}
