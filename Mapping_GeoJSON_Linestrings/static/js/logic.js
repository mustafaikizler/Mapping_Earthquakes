// add console.log  to chech if our  code is working or not.
console.log("This code is working");

// we acrare the streets view tile layer that will be the default background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  We Create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// createa base layer that holds both maps.
let baseMap = {Day_Navigation:light,
Night_Navigation: dark
};

let map = L.map("mapid",{
    center:[
        44.0, -80.0
    ],
    zoom:2,
    layer:[dark],
    

});
// Pass our map layers into our layers control and add the layerds control the map.
L.control.layers(baseMap).addTo(map)


// // then we add our "graymap" tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/mustafaikizler/Mapping_Earthquakes/main/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
    color:"#ffffa1",
    weight:2
}

// Grabbin our GeoJSON data.
d3.json(torontoData).then(function(data){
    console.log(data);
// CREATING A GEOJSON DATA WITH THE RETRIEVED DATA
L.geoJSON(data,{
    style: myStyle,
    onEachFeature:function(feature,layer){
        layer.bindPopup("<h3> Airline:"+ feature.properties.airline+"</h3> <hr><h3> Destination:"+feature.properties.dst+"</h3>");
    }
}).addTo(map);

});