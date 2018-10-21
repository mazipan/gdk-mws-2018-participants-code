var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var arr_marker= [
  [-8.701660,115.169856],
  [-8.701660,115.2],
  [-8.701660,115.3],
  [-8.701660,114.169856],
  [-8.701660,115.5]
];

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidG9iaWFza3VzbmFtYW4iLCJhIjoiY2pkZTl0bWliMDhtdDMzam95bmY2NHMwcCJ9.JPWTQAjVSRabl5xrm_eexw'
}).addTo(mymap);

for (m of arr_marker) {
  L.marker(m).addTo(mymap);
}

let popup = L.popup()
.setLatLng([-8.703315, 115.168869])
.setContent("Restoran terbaik disini.")
.openOn(mymap);