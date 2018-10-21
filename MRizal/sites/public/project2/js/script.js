let mymap = L.map('mapid').setView([-6.364632, 106.828712], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC - BY - SA</a>, Imagery© <a href ="https://www.mapbox.com/"> Mapbox </a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiaGFyZHphbCIsImEiOiJjam1oNzVrYm0xMDljM3Fyc3ZhbWFzbmY2In0.0qPCkp2Jo9bxfiB71vjZ9w'
}).addTo(mymap);

let mark = [-6.364632, 106.828712];

let marker = L.marker(mark).addTo(mymap);
marker.bindPopup("<b>Fakultas Ilmu Komputer</b><br>Universitas Indonesia").openPopup();

let lingkar = L.circle([-6.365148, 106.829667], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);
lingkar.bindPopup("Perpustakaan Universitas Indonesia");

let polygon = L.polygon([
    [-6.367510, 106.826256],
    [-6.370187, 106.828773],
    [-6.369882, 106.825595]
]).addTo(mymap);
polygon.bindPopup("FMIPA Universitas Indonesia");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Kamu menunjuk tempat ke " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);