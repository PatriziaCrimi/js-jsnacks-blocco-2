/*
ASSIGNMENT
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// **************** SOLUTION NUMBER 1 - PLAYING WITH LETTERS ****************
console.log('*** SOLUTION NUMBER 1 - PLAYING WITH LETTERS ***');
console.log('');

// Initialization of variables
var letters_array_long = ['a', 'g', 'q', 'c', 'f', 'h', 'p', 'r', 's', 'b', 'z'];
var letters_array_short = ['d', 'l', 'w', 'j', 't', 'm', 'k'];
console.log('The longest letters array is: ' , letters_array_long);
console.log('The shortest letters array is: ' , letters_array_short);
console.log('');

do {
  // Generating random letter --> with function
  letters_array_short.push(getRndCharacter());
} while(letters_array_short.length < letters_array_long.length);
console.log('The former shortest array is: ' , letters_array_short);
console.log('');


// **************** SOLUTION NUMBER 2 - PLAYING WITH NUMBERS ****************
console.log('*** SOLUTION NUMBER 2 - PLAYING WITH NUMBERS ***');
console.log('');

// Initialization of variables and constants
var numbers_arrayOne = [27, 87, 9, 12, 5, 24, 85, 90, 41, 33, 70, 15];
var numbers_arrayTwo = [8, 26, 88, 93, 1, 3, 14, 57];
const minimum_number = 1;
const maximum_number = 1000;

// Generating random number --> with function
var random_number = getRndInteger(minimum_number, maximum_number);
console.log('The random number generated is: ' + random_number + '.');

// ----------------------- Creation of functions ------------------------

// ### FUNCTION: Generating random letter ###
function getRndCharacter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// ### FUNCTION: Generating random number ###
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
