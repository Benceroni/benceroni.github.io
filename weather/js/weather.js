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

document.getElementById("displayDate").innerHTML =
  daylist[day] +
  ", " +
  day +
  " " +
  monthNames[today.getMonth()] +
  " " +
  today.getFullYear();

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}
