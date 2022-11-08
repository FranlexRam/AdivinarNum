alert('Elige dos numeros del 1 al 10');
var num1 = 2;
var num2 = 3;
var n1c = num1;
var n2c = num2;

var num1 = Number(prompt('Ingresa el numero 1:'));
while (num1<1 || num1>10){
    num1 = Number(prompt("Debe ingresar un numero valido"))
}

// var num2 = Number(prompt('Ahora, ingresa el numero 2:'));


alert('Ganaste');


