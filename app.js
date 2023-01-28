let header = document.getElementById('header');
header.innerHTML = "If Statements & Comparison Operators";

const id = 100;

//EQUAL TO

if (id == 100) {
  console.log(`${id} does equal 100`)
}

if (id == 101) {
  console.log(`${id} does equal 100`)
} else {
  console.log(`${id} equals 100 not 101`)
}

// NOT EQUAL TO

if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// use === most times if you want to compare value and type

const id_string = '100';

if (id_string === '100') {
  console.log('It is a string that is 100');
}

if (id_string == 100) {
  console.log('CORRECT. 100 string equals 100 int with ==');
}

// test if symbol is defined
if (typeof foo !== 'undefined') {
  console.log(`The FOO id ${foo} `);
} else {
  console.log('NO FOO');
}

// GREATER THAN OR LESS THAN

if (id > 200) {
  console.log('ID is > 200');
} else {
  console.log('ID is < 200');
}

if (id >= 100) {
  console.log('ID >= 100');
}

if (id <= 100) {
  console.log('ID <= 100');
}

const color = 'red';

if (color === 'chicken') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is something we were not expecting');
}

// LOGICAL OPERATORS

const personName = 'Steve';
const age = 12;

// && === AND
if (age > 0 && age < 13) {
  console.log(`${personName} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${personName} is a teenager`);
} else {
  console.log(`${personName} is an adult`);
}

// || === OR

if (age < 16 || age > 65) {
  console.log(`${personName} cannot run in race.`);
} else {
  console.log(`${personName} is registered for the race`);
}

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// without braces.
if (id === 100)
  console.log('Works without braces which is madness');
else
  console.log('does not print, do not do this');
