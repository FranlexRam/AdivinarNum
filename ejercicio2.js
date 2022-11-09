//Juego que tenga 3 intentos, que permita ingresar 2 numeros que sean del 1 al 10>


var min = 1;
var max = 10;
var attempts = 0;
var num1;
var num2;
var random = Math.ceil(Math.random()*10);
alert('Please enter a number from ' +min+  ' to '+max);

for (attempts; attempts<3; attempts++) {
    num1 = parseInt(prompt('Enter the 1st number'));
    num2 = parseInt(prompt('Enter the 2nd number'));

    if (num1 >= 1 && num1 <=10 && num2>=1 && num2<=10){
        if (num1 == random || num2 == random && attempts<2){
            alert('Excellent, You guessed the number at the '+(attempts+1)+ ' attempt!!');
            break;
        } else if (num1 !== random && num2 != random){
            alert('Incorrect, You still have '+(2-attempts)+' attempts');
        } else{
            break;
        }
        
    } else {
        alert('Remember that num1 and num2 has to be from '+min+ ' to '+max);
        attempts--;
    }
}


if (num1==random || num2==random && attempts==2){
    alert('Congratulations! You guessed the number in the last attempt!');
} else {
    alert('Sorry, You have no more attempts left');
}

