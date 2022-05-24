// add console.log  to chech if our  code is working or not.
console.log("This code is working");

// Create the map object with a center of zoom level.

// let map = L.map("mapid").setView([40.7, -94.5], 4);
// we will go with alternative way...

let map = L.map("mapid",{

    center:[

        40.7, -94.5

    ],

    zoom:4
});

// we create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// then we add our "graymap" tile layer to the map.

streets.addTo(map);