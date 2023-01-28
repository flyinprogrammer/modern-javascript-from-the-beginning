let header = document.getElementById('header');
header.innerHTML = "Switches";

const color = 'chicken';

switch (color) {
  case 'red':
    console.log('red is my favorite');
    break;
  case 'blue':
    console.log('blue is really nice');
    break;
  default:
    console.log('new color i do not know');
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Freeday';
    break;
}
console.log(`Today is ${day}.`);
