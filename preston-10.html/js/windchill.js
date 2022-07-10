// calculating wind chill

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fc9fe556276fc9142140291bdb778812&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let currentTemp = jsObject.main.temp;
    let windSpeed = jsObject.wind.speed;
    document.getElementById("current").textContent =
      jsObject.main.temp.toFixed(0) + "°F";
    document.getElementById("high").innerHTML =
      jsObject.main.temp_max.toFixed(0) + "°F";
    document.getElementById("windSpeed").innerHTML =
      jsObject.wind.speed.toFixed(0) + " MPH";
    document.getElementById("humidity").innerHTML =
      jsObject.main.humidity.toFixed(0) + "%";

    // const imagesrc =
    // "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });

let currentTemp = document.getElementById("current").innerHTML;
let windSpeed = document.getElementById("windSpeed").innerHTML;
let windChill;

windChill =
  35.74 +
  0.6215 * currentTemp -
  35.75 * windSpeed ** 0.16 +
  0.4275 * currentTemp * windSpeed ** 0.16;

windChill = windChill.toFixed(0);

if (currentTemp >= 50 || windSpeed <= 3) {
  document.getElementById("windSpeed").style.visibility = "hidden";
  console.log("over 50 deg or windspeed less than 3");
}

document.getElementById("windChill").innerHTML = windChill + "°F";
document.getElementById("windSpeed").innerHTML = windSpeed + " MPH";

const apiURLforecast =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fc9fe556276fc9142140291bdb778812&units=imperial";

fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.list[0].main.temp);
    x = 1;
    for (var i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.substring(11) == "18:00:00") {
        console.log(jsObject.list[i].dt_txt.substring(11));

        console.log(jsObject.list[i].main.temp);
        document.getElementById("temp" + x).textContent =
          jsObject.list[i].main.temp.toFixed(0) + "°F";

        const imagesrc =
          "https://openweathermap.org/img/w/" +
          jsObject.list[i].weather[0].icon +
          ".png";
        // document.getElementById("img" + x).textContent = imagesrc; // informational specification only
        document.getElementById("img" + x).setAttribute("src", imagesrc);

        x++;
      }
    }
  });
