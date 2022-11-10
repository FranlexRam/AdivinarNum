//Juego que tenga 3 intentos, que permita ingresar 2 numeros que sean del 1 al 10>


//Adivinar un numero ingresando 2 numeros del 1 al 10 teniendo 3 intentos.


var min=1;
var max=10;
var attempts=0
var num1;
var num2;
var random= Math.ceil(Math.random()*10);
alert('Please enter 2 numbers from '+min+ ' to '+max);

for (attempts; attempts<3; attempts++){
    var num1= prompt('Enter 1st number');
    var num2= prompt('Enter 2nd number');


    if (num1>=min && num1<=10 && num2>=min && num2<=10){
        if (num1==random || num2==random && attempts<2){
            alert('Excellent, You guessed the number at the '+(attempts+1)+ ' attempt!');
            break;
        } else if (num1!=random && num2!=random && attempts<2){
            alert('Incorrect, You still have '+(2-attempts)+ ' attempts.');
        } else {
            break;
        }

    } else {
        alert('Remember that num1 and num2 have to be from '+min+ ' to '+max);
        attempts--;
    }
}


if (num1==random || num2==random && attempts==2){
    alert('Congrats, You guessed the number at the last attempt!!');
} else {
    alert('Sorry, You have no more attempts left.\nThe correct number was '+random);
}