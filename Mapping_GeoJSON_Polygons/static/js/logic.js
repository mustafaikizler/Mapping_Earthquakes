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
SataliteStreets: satelliteStreets
};

let map = L.map("mapid",{
    center:[
        43.7, -79.3
    ],
    zoom:11,
    layers:[satelliteStreets],
    

});
// Pass our map layers into our layers control and add the layerds control the map.
L.control.layers(baseMap).addTo(map)


// // then we add our "graymap" tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/mustafaikizler/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
    color:"#0000CD",
    weight:4,
    fill:"#ffff32",
    fillOpacity:0.2,
    opacity:3
}

// Grabbin our GeoJSON data.
d3.json(torontoHoods).then(function(data){
    console.log(data);
// CREATING A GEOJSON DATA WITH THE RETRIEVED DATA
L.geoJSON(data,{
    style: myStyle,
    onEachFeature:function(feature,layer){
        layer.bindPopup("<h3> Neighbourhood:"+ feature.properties.AREA_NAME+"</h3>");
    }
}).addTo(map);

});
