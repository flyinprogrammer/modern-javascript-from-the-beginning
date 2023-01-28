let header = document.getElementById('header');
header.innerHTML = "Block Scope  with let and const";


// global scope

var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4
//   let b = 5
//   const c = 6
//   console.log(`Function Scope: ${a} ${b} ${c}`);
// }

// test();

if (true) {
  // Block Scope
  var a = 4;
  let b = 5
  const c = 6;
  console.log(`If scope: ${a} ${b} ${c}`)
}

// var gets real spooky
for (var a; a < 9; a++) {
  console.log(`Loop a: ${a}`);
}

console.log(`Global Scope: ${a} ${b} ${c}`);

