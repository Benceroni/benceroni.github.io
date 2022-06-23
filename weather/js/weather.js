const today = new Date();

const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const tomorrow = daylist[day + 1];
const day2 = daylist[day + 2];
const day3 = daylist[day + 3];
const day4 = daylist[day + 4];
const day5 = daylist[day + 5];

document.getElementById("displayDate").innerHTML =
  daylist[day] +
  ", " +
  today.getDate() +
  " " +
  monthNames[today.getMonth()] +
  " " +
  today.getFullYear();

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

document.getElementById("day1").innerHTML = tomorrow;
document.getElementById("day2").innerHTML = day2;
document.getElementById("day3").innerHTML = day3;
document.getElementById("day4").innerHTML = day4;
document.getElementById("day5").innerHTML = day5;
