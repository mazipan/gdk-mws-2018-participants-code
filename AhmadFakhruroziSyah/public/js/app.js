function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function project1() {
  function calculate() {
    if (this.name === "input1") {
      input1 = this.value;
    }
    if (this.name === "input2") {
      input2 = this.value;
    }
    if (input1 && input2) {
      result = parseFloat(input1) + parseFloat(input2);
      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML = "";
    }
  }

  let result;
  let input1;
  let input2;
  let i;
  const allInput = document.getElementsByTagName("input");

  for (i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener("keyup", calculate, false);
  }
}

function project2() {
  // Get Access Token form https://www.mapbox.com/
  var accessToken = "pk.eyJ1IjoiaGFpZmFocnVsIiwiYSI6ImNqbXUxbXJ1ZjA2ZDkzeG13cmRsc2JhbGgifQ.C8-BwgcVumaBTPfNqZ5uyA";
  // Address : Long, Lat
  var cempakaPutih = [-6.176522, 106.873289];
  var map = L.map("map").setView(cempakaPutih, 15);

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: "mapbox.streets",
    accessToken: accessToken
  }).addTo(map);

  var marker = L.marker(cempakaPutih).addTo(map);
  var circle = L.circle(cempakaPutih, {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);

  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");

  var popup = L.popup();
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Lokasi yang dipilih: " + e.latlng.toString())
      .openOn(map);
  }
  map.on("click", onMapClick);
}
