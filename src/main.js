import { leaflet } from "leaflet";

/*let map = leaflet.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});*/

var map = L.map('map').setView([43.216, 2.35], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);