let mymap = L.map('mapid').setView([-8.701660,115.169856], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
	attribution : 'Map data & copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contibutors, <a href="https://creativecommons.org/license/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom:18,
	id: 'mapbox.streets',
	accessToken:'pk.eyJ1Ijoicml6ZXNreSIsImEiOiJjam4ybDNiNXMwN2s5M2tydWxhejVxOW02In0.31GTpf7Tyd-1_VxPDq36ww'
}).addTo(mymap);


let marker = L.marker([-8.701660,115.169856]).addTo(mymap);

let circle = L.circle([-8.701660,115.169856], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500
}).addTo(mymap);


let polygon = L.polygon([
[51.509, -0.08],
[51.503, -0.06],
[51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Resto top disini</b><br>yes!").openPopup(); 

circle.bindPopup("Ini sebuah circle.");
polygon.bindPopup("Ini sebuah polygon.");	


var popup = L.popup()
.setLatLng([-8.703315, 115.168869]);

//Event 
function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent("Lokasi yang dipilih: " + e.latlng.toString()).openOn(mymap);
}

mymap.on('click', onMapClick);
