/*
ASSIGNMENT
Generatore di “nomi cognomi” casuali:
prendendo a caso un nome e un cognome da una lista di nomi e da una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
*/

// Initialization of variables
var guests_list = [];
var guests_number = 18;

var names_list = ['Matthew', 'Richard', 'Clark', 'Jodie', 'Carla', 'David', 'Simon', 'Ronnie', 'Nathalie', 'Kristine', 'Lucas', 'Henry', 'George', 'Louisa', 'Robin', 'Caroline', 'Helly', 'Roxanne'];
console.log('The Names List array is: ');
console.log(names_list);
console.log('');

var surnames_list = ['Smith', 'Johnson', 'Brown', 'Williams', 'Miller', 'Davis', 'Anderson', 'Rodriguez', 'Taylor', 'Jackson', 'Lopez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'White', 'Ford', 'Carlson'];
console.log('The Surnames List array is: ');
console.log(surnames_list);
console.log('');

// *********** Generating false list of guests ***********
while (guests_list.length < guests_number) {
  // Generating random guest (random name & surname)
  var index_name = Math.floor(Math.random() * names_list.length);
  var index_surname = Math.floor(Math.random() * surnames_list.length);
  var fake_guest = names_list[index_name] + ' ' + surnames_list[index_surname];
  // Check and discard homonyms
  if(!guests_list.includes(fake_guest)) {
    // Adding current fake guest to fake guests list (array)
    guests_list.push(fake_guest);
  }
}
// Print output in console
console.log('The fake guests list is: ');
console.log(guests_list);
console.log('');
