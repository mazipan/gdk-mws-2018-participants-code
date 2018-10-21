var mymap = L.map('mapid').setView([-8.701660,115.169856], 13);
var marker = L.marker([-8.701660,115.169856]).addTo(mymap);
// marker.bindPopup("<b>Resto top disini/b><br>yes!").openPopup();
var circle = L.circle([-8.701660,115.169856], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);
circle.bindPopup("Ini sebuah circle.");
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
    ]).addTo(mymap);


L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
    {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGVyaXRlY2hpZSIsImEiOiJjam1qZGFsejEwZWlpM3BtcHV3MDRxaXR2In0.8RhGJ-6v8_kivfF6kPEv0A'
}).addTo(mymap);

// function onMapClick(e) {
//     console.log("Peta diklik pada posisi " + e.latlng);
// }
// mymap.on('click', onMapClick);

var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Lokasi yang dipilih: " + e.latlng.toString())
    .openOn(mymap);
    }
mymap.on('click', onMapClick);