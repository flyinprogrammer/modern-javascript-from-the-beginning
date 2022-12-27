let val;

// Number to string

val = 5;

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(555);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 4);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);


val = String([1, 2, 3, 4]);

console.log(val);
console.log(typeof val);
console.log(val.length);


val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);


val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = 5;
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
// Length only works on strings
// console.log(val.length);

val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number('hello');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number([1, 2, 3])
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt('1000');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt(1000.3)
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseFloat('100.30');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

const val3 = String(5);
const val4 = 6;
const sum2 = Number(val3 + val4);
console.log(sum2);
console.log(typeof sum2);

