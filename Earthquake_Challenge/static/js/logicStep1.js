// add console.log  to chech if our  code is working or not.
console.log("This code is working");

// we acrare the streets view tile layer that will be the default background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  We Create the dark view tile layer that will be an option for our map.
let satelliteStreets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// createa base layer that holds both maps.
let baseMap = {Streets:streets,
Satalite: satelliteStreets
};

let map = L.map("mapid",{
    center:[
        39.5, -98.5
    ],
    zoom:3,
    layers:[streets]
});
// Pass our map layers into our layers control and add the layerds control the map.
L.control.layers(baseMap).addTo(map)


// // then we add our "graymap" tile layer to the map.
// streets.addTo(map);




// Grabbin our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function(data){
    console.log(data);
// CREATING A GEOJSON DATA WITH THE RETRIEVED DATA
L.geoJSON(data).addTo(map)
    
});
    