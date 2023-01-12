// you can write js here
const myDate = new Date();

let isTesting = true;

const weekday = "still waiting";
const weekend = "Nice WE";

let day;
let hour;


if (isTesting) {
    day = parseInt(prompt("Enter a day of the week (1-7)"));
    hour = parseInt(prompt("Enter an hour (0-23)"));
} else {
    day = myDate.getDay();
    hour = myDate.getHours();
}


if ((day === 0 || day === 6) || (day === 5 && hour > 16 ) || (day === 1 && hour < 9)){
  console.log(weekend);
} else {
  console.log(weekday);
}
