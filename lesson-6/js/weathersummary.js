const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fc9fe556276fc9142140291bdb778812&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.main.temp);
    document.getElementById("current").textContent = jsObject.main.temp + "°F";
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });
