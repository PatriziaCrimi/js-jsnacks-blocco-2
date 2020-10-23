/*
ASSIGNMENT
Crea un array vuoto
e chiedi all’utente un numero
da inserire nell’array.
Continua a chiedere i numeri all’utente
e a inserirli nell’array
fino a quando la somma degli elementi è minore di 50.
*/

// Initialization of variables and constants
var numbers_array = [];
const limit_number = 50;
var sum = 0;

// Entering valid numbers until their sum reaches the limit number
do {
  var user_number = parseFloat(prompt('Enter a number.'));
  // Check valid input: user's number is a number
  while (isNaN(user_number)) {
    console.log('ERROR. The value you entered is not valid.');
    alert('ERROR. The value you entered is not valid.');
    user_number = parseFloat(prompt('Please enter a number.'));
  }
  console.log('The number you entered is: ' + user_number + '.');

  // Pushing the user number in the numbers array
  numbers_array.push(user_number);
  console.log('The array containing the user numbers is: ', numbers_array);

  // Calculating sum of the numbers entered by the user
  sum += user_number;
  if(sum < limit_number) {
    alert('Well done! You haven\'t reached the limit yet. Choose another number!');
  } else {
    alert('GAME OVER! You have reached the limit number.');
  }

} while(sum < limit_number);

// Output messages for the user
if(numbers_array.length === 1) {
  if(user_number === limit_number) {
    console.log('The user entered only ' + numbers_array.length + ' number because it is precisely the limit number of ' + limit_number + '.');
    alert('You entered only ' + numbers_array.length + ' number because it is precisely the limit number of ' + limit_number + '.');
  } else {
    console.log('The user entered only ' + numbers_array.length + ' number because it was higher than the limit number of ' + limit_number + '. The user\'s number was: ' + sum + '.');
    alert('You entered only ' + numbers_array.length + ' number because it is higher than the limit number of ' + limit_number + '. Your number is: ' + user_number + '.');
  }
} else {
  console.log('The user entered ' + numbers_array.length + ' numbers before their sum was higher than ' + limit_number + '.');
  alert('You entered ' + numbers_array.length + ' numbers before their sum was higher than ' + limit_number + '.');
  console.log('The sum of the numbers entered by the user is: ' + sum + '.');
  alert('The sum of the numbers you entered is: ' + sum + '.');
}
