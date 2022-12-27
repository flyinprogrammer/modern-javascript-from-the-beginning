// // Log to console.
// console.log('Hello world.');

// /*
//  multi
//  line
//  comments
// */

// console.log(123);
// console.log(true);

// var greeting = 'Hello';

// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
console.table({a:1, b:2});

// console.error('This is some error');
// // console.clear()
// console.warn('This is a warning.');

// console.time('Hello');

// for (let index = 0; index < 10; index++) {
//    console.log("Doing something: " + index);
// }

// console.timeEnd('Hello');


// // Variables

// // var, let, const

// var personName = 'John Doe';
// console.log(personName);
// personName = 'Steve Smith';
// console.log(personName);

// // init var
// // This will happen with a conditional
// var unassigned;
// console.log(unassigned);
// unassigned = 'Hello';
// console.log(unassigned);

// // letters, numbers, _, $
// // Cannot start with a number

// // var 1name = 'foo';
// var $notRecommended = 'John';
// var _NotSuggested = 'probably a private variable';

// // multi-word vars
// var firstName = 'Camel Case';
// console.warn(firstName);
// var first_name = 'Underscore Convention';
// var FirstName = 'Pascal Case';
// var firstname = 'All lowercase; this is garbage.';

// let & const

let firstName = 'Alan';
console.log(firstName);

const lastName = 'Scherger';
// lastName = 'CannotChange';

// const foo;
// missing = in const declaration

const person = {
    name: 'John',
    age: 30
}
console.log(person);

// You can change the data, but `person` cannot
// change what it points to.
person.name = 'Alica';
console.log(person);

// const does not mean immutable for reference types
const numbers = [1,2,3,4];
numbers.push(6);
console.log(numbers);

