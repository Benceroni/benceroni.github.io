const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// YEAH- I KNOW IT'S ABSOLUTLY CURSED. IT WORKS. I HATE IT.

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    console.log(towns);
    for (let i = 0; i < towns.length; i++) {
      if (i != 0) {
        continue;
      }

      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let img = document.createElement("img");

      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      p1.innerHTML = "Year Founded: " + towns[i].yearFounded;
      p2.innerHTML = "Population: " + towns[i].currentPopulation;
      p3.innerHTML = "Yearly Rainfall: " + towns[i].averageRainfall + " in.";
      img.setAttribute("src", towns[i].photo);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    towns = jsonObject["towns"];
    console.log(towns);
    for (i = 0; i < towns.length; i++) {
      if (i != 2) {
        continue;
      }

      card = document.createElement("section");
      h2 = document.createElement("h2");
      h3 = document.createElement("h3");
      p1 = document.createElement("p");
      p2 = document.createElement("p");
      p3 = document.createElement("p");
      img = document.createElement("img");

      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      p1.innerHTML = "Year Founded: " + towns[i].yearFounded;
      p2.innerHTML = "Population: " + towns[i].currentPopulation;
      p3.innerHTML = "Yearly Rainfall: " + towns[i].averageRainfall + " in.";
      img.setAttribute("src", towns[i].photo);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    towns = jsonObject["towns"];
    console.log(towns);
    for (i = 0; i < towns.length; i++) {
      if (i != 6) {
        continue;
      }

      card = document.createElement("section");
      h2 = document.createElement("h2");
      h3 = document.createElement("h3");
      p1 = document.createElement("p");
      p2 = document.createElement("p");
      p3 = document.createElement("p");
      img = document.createElement("img");

      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      p1.innerHTML = "Year Founded: " + towns[i].yearFounded;
      p2.innerHTML = "Population: " + towns[i].currentPopulation;
      p3.innerHTML = "Yearly Rainfall: " + towns[i].averageRainfall + " in.";
      img.setAttribute("src", towns[i].photo);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);
    }
  });
