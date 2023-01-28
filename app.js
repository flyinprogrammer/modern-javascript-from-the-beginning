let header = document.getElementById('header');
header.innerHTML = "Function Declarations and Expressions";

// function declarations

function greet(firstName, lastName) {

  // ES5 mechanism
  if (typeof firstName === 'undefined') {
    firstName = 'defaultFirstName'
  }
  if (typeof lastName === 'undefined') {
    lastName = 'defaultLastName'
  }
  // console.log('Hello');
  return `Hello ${firstName} ${lastName}`;
}

function greetES6(firstName = 'defaultFirstName', lastname = 'defaultLastName') {
  return `Hello ${firstName} ${lastname}`;
}

console.log(greet('Alan', 'Scherger'));
console.log(greet());
console.log(greetES6());

// Function expressions
const square = function(x = 3) {
  return x * x;
}

console.log(square(9));

// immediately invokable function expressions
// IIFEs

(function() {
  console.log('IIFE Ran..');
})();

(function(name = 'Jon Doe') {
  console.log(`Hello ${name}`);
})('Brad');

// Property Methods

const todo = {
  add: function(x) {
    console.log(`add todo ${x}`);
  },
  edit: function(id) {
    console.log(`edit ${id}`);
  }
}

todo.delete = function(id) {
  console.log(`delete ${id} todo`);
}

todo.add(33);
todo.delete(33);
todo.edit(44);

