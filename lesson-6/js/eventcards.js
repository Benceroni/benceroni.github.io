const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

let town = document.getElementById("locationName").innerHTML;
console.log(town);

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    console.log(towns);
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name != town) {
        continue;
      }
      for (let x = 0; x < towns[i].events.length; x++) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        h2.textContent = towns[i].events[x];
        card.appendChild(h2);
        document.querySelector("div.cards").appendChild(card);
        // console.log(towns[i].events[x]);
      }
    }
  });
