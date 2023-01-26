let header = document.getElementById('header');
header.innerHTML = "Object Literals";

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function() {
    let todaysYear = new Date().getFullYear();
    return todaysYear - this.age;
  }
}

let val;

val = person.firstName;
console.log(val);

val = person['lastName'];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address.state;
console.log(val);

val = person.address['city'];
console.log(val);

val = person.getBirthYear();
console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 },
]

console.log("for/i")
for (let i = 0; i < people.length; i++) {
  console.log("\t" + people[i].name)
}


// extra credit i couldn't help myself
console.log("for/of")
for (p of people) {
  console.log("\t" + p.name);
}

console.log("for/in");
for (let x in people) {
  console.log("\t" + people[x].name);
}

console.log("forEach");
people.forEach(function(p) {
  console.log("\t" + p.name);
})
