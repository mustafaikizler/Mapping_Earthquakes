// add console.log  to chech if our  code is working or not.
console.log("This code is working");

// Create the map object with a center of zoom level.

// let map = L.map("mapid").setView([40.7, -94.5], 4);
// we will go with alternative way...

let map = L.map("mapid",{

    center:[

        34.0522, -118.2437

    ],

    zoom:14
});


// Get data from cities.js
let cityData = cities;

// Loop Through the cities array and create one marker for each city.

cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
        radius:city.population / 100000,
        color:"orange",
        fillcolor:"#f03"
        
    }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map)
});


// Add a marker to the map for LOs Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// we create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// then we add our "graymap" tile layer to the map.

streets.addTo(map);

