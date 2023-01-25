let header = document.getElementById('header');
header.innerHTML = "Arrays & Array Methods";

// This is how you can create an array
const numbers = [43, 56, 33, 23, 44, 36, 5];
console.log(numbers);

const numbers2 = new Array(22, 45, 33, 76, 54);

// also with strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(mixed);

let val;

val = numbers.length;
console.log(val);

val = Array.isArray(numbers);
console.log(val);

// returns 23 because arrays are 0 based
val = numbers[3];
console.log(val);

val = numbers[0];
console.log(val);

// Insert into array
numbers[2] = 100
val = numbers.indexOf(36)
console.log(numbers);
console.log(val);

// mutating arrays
numbers.push(250);
console.log(numbers);
// Add on to front
numbers.unshift(120);
console.log(numbers);
// Take off from end
numbers.pop();
console.log(numbers);
// Take off from front
numbers.shift();
console.log(numbers);
// Splice values
numbers.splice(numbers.indexOf(56), 1);
console.log(numbers);
// reverse array
numbers.reverse();
console.log(numbers);

val = numbers.concat(numbers2);
console.log(val);

val = fruit.sort();
console.log(val);

val = numbers.sort();
console.log(val);

val = numbers.sort(function(a, b) {
  return a - b;
});
console.log(val);

val = numbers.sort(function(a, b) {
  return b - a;
});
console.log(val);


// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);
console.log(val);

val = numbers.sort(function(a, b) {
  return a - b;
}).find(under50);
console.log(val);
