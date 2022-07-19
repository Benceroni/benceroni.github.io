const requestURL = "https://benceroni.github.io/scoots/data/rentals.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const scooters = jsonObject["scooters"];
    console.log[scooters];
    for (let i = 0; i < scooters.length; i++) {
      let card = document.createElement("section");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let p5 = document.createElement("p");
      let img = document.createElement("img");

      h3.innerHTML = scooters[i].name;
      p1.textContent = scooters[i].max + " person(s)";
      p2.textContent = "Half day: $" + scooters[i].halfday;
      p3.textContent = "Full day: $" + scooters[i].fullday;
      p4.textContent = "Walk in half day: $" + scooters[i].halfwalk;
      p5.textContent = "Walk in full day: $" + scooters[i].fullwalk;
      img.setAttribute("src", "images/scooter" + [i] + ".jpg");

      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(img);
      document.querySelector("div.rentals").appendChild(card);
    }
  });
