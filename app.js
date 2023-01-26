let header = document.getElementById('header');
header.innerHTML = "Dates and Times";

let val;

const today = new Date();

val = today;
console.log(typeof val);

val = today.toString();
console.log(typeof val);

const birthday = new Date('9-10-1981 11:24:00');
console.log(birthday);

let otherBirthday = new Date('September 10 1981');
console.log(otherBirthday);

console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());

let modBirthday = new Date('9/10/1981');
console.log("modBirthday: " + modBirthday);
modBirthday.setMonth(2);
console.log("modBirthday: " + modBirthday);
modBirthday.setDate(12);
console.log("modBirthday: " + modBirthday);
modBirthday.setFullYear(1985);
console.log("modBirthday: " + modBirthday);
modBirthday.setMinutes(30);
console.log("modBirthday: " + modBirthday);
modBirthday.setSeconds(25);
console.log("modBirthday: " + modBirthday);
