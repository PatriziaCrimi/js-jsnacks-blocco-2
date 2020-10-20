/*
ASSIGNMENT
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari.
*/

// ************ SOLUTION NUMBER 1 - BASIC ************
console.log('*** SOLUTION NUMBER 1 - BASIC ***');

// Initialization of variables
var integers_list = [];
const integers_list_length = 5;
const maximum_number = 100 + 1;
var sum = 0;

// Creation of random integers array
var i = 0;
while (i < integers_list_length) {
  var integer_number = Math.floor(Math.random() * maximum_number);
  integers_list.push(integer_number);
  i++;
}

// Selecting only numbers with odd index
for (i = 0; i < integers_list.length; i++) {
  if (i % 2) {
    sum = sum + integers_list[i];
  }
}

// Print output in console
console.log('The list of random integer numbers is: ')
console.log(integers_list);
console.log('The sum of numbers with an odd index is: ' + sum + '.');
console.log('');


// ************ SOLUTION NUMBER 2 - OPTIMIZATION ************
console.log('*** SOLUTION NUMBER 2 - OPTIMIZATION ***');

// Initialization of variables
integers_list = [];
sum = 0

// Creation of random integers array
i = 0;
while (i < integers_list_length) {
  integer_number = Math.floor(Math.random() * maximum_number);
  integers_list.push(integer_number);
  i++;
}

// Selecting only numbers with odd index
// starting from "index = 1" (odd) and selecting only every-other-number (certainly odd index too) using "i = i+2"
for (i = 1; i < integers_list.length; i = i+2) {
    sum = sum + integers_list[i];
}

// Print output in console
console.log('The list of random integer numbers is: ')
console.log(integers_list);
console.log('The sum of numbers with an odd index is: ' + sum + '.');
