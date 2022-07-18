const requestURL = "httsp://benceroni.github.io/data/rentals.json";


fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject)){
    console.table(jsonObject);
    const scooters = jsonObject["scooters"];
    console.log[scooters]
}