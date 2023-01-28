let header = document.getElementById('header');
header.innerHTML = "General Loops";

for (let i = 0; i < 10; i++) {
  console.log(`Counter at ${i}`);
}


for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('My favorite number is 2');
  }
  console.log(`Counter at ${i}`);
}

// continue to the next iteration
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('My favorite number is 2');
    continue;
  }
  console.log(`Counter at ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('My favorite number is 2');
  }
  if (i === 5) {
    console.log('Time to stop at 5');
    break;
  }
  console.log(`Counter at ${i}`);
}


// WHILE

let i = 0;
while (i < 3) {
  console.log(`while: ${i}`);
  i++;
}

i = 100;

do {
  console.log(`100 is not < 10 but it still prints: ${i}`);
  i++;
}
while (i < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log('look at forEach')
cars.forEach(function(car, index, array) {
  console.log(`${car} :: ${index} :: ${array}`);
});


// MAP
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' },
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// for/in
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

