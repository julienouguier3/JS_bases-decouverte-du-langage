// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log('hello from file');

//var kelvins = 294;
var celsius = kelvins - 273;//La variable nommée celsius stock la valeur de la variable kelvins moins 273
console.log(celsius);
var Fahrenheits = celsius * (9 / 5) + 32;
var fahrenheits = Fahrenheits;//La variable fahrenheits stock le résultat de la variable Farenheits.
console.log(Math.floor(fahrenheits));//Renvoie dans la console le plus grand entier qui est inférieur ou égal à un nombre x.