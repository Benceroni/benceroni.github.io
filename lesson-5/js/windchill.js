// calculating wind chill

let currentTemp = document.getElementById("current").innerHTML;
let windSpeed = document.getElementById("windSpeed").innerHTML;
let windChill;

windChill =
  35.74 +
  0.6215 * currentTemp -
  35.75 * windSpeed ** 0.16 +
  0.4275 * currentTemp * windSpeed ** 0.16;

windChill = windChill.toFixed(0);
// console.log(windChill);

if (currentTemp <= 50 && windSpeed >= 3) {
  console.log(windChill);
} else {
  windChill = "N/A";
}

document.getElementById("windChill").innerHTML = windChill + "°F";
document.getElementById("windSpeed").innerHTML = windSpeed + " MPH";
