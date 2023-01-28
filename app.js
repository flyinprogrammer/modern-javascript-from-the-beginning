let header = document.getElementById('header');
header.innerHTML = "A look at the window object";


// CONSOLE
// window.console.log('Foobar');

// ALERT
// window.alert('Hello World');

// PROMPT
//const input = prompt();
//console.log(`${input}`);

// CONFIRM
// if (confirm("are you sure?")) {
//   console.log('YES');
// } else {
//   console.log('Cancelled');
// }

let val;

console.log(`outerHeight: ${window.outerHeight}`);
console.log(`outerWidth: ${window.outerWidth}`);
console.log(`innerHeight: ${window.innerHeight}`);
console.log(`innerWidth: ${window.innerWidth}`);

console.log(`window.scrollY: ${window.scrollY}`);
console.log(`window.scrollY: ${window.scrollX}`);


console.log(`window.location: ${window.location}`);
console.log(window.location);
console.log(`window.location.hostname: ${window.location.hostname}`);

// window.location.href = 'https://google.com';
//window.location.reload();
console.log(window.history);

console.log(`${window.history.length}`)

// navigator object

let nav = window.navigator;
console.log(nav);
console.log(nav.appName);
console.log(nav.appVersion);

console.log(nav.userAgent);
console.log(nav.platform);
console.log(nav.vendor);
console.log(nav.language);
