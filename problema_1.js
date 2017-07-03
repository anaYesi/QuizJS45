alert("Ingrese numeros diferentes");
var num_1 = prompt("Ingrese 1er numero");
var num_2 = prompt("Ingrese 2do numero ");
var num_3 = prompt("Ingrese 3er numero");

if(num_1 > num_2 && num_1 > num_3 && num_2 >num_3)
{
	console.log("el numero mayor " + num_1);
	console.log("el numero menor " +num_3);

}else if(num_2 > num_1 && num_2 > num_3 && num_1 >num_3)
{
	console.log("el numero mayor " +num_2);
	console.log("el numero menor " +num_3);
}
else if(num_2 > num_1 && num_2 > num_3 && num_3 >num_1)
{
	console.log("el numero mayor " +num_2);
	console.log("el numero menor " +num_1);
}
else if(num_3 > num_1 && num_3 > num_2 && num_1 > num_2 )
{
	console.log("el numero mayor " +num_3);
	console.log("el numero menor " +num_2);

}
else if(num_3 > num_1 && num_3 > num_2 && num_2 > num_1 )
{
	console.log("el numero mayor " +num_3);
	console.log("el numero menor " +num_1);
}
else
{
	console.log("los numeros son iguales");
}