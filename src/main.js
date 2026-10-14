import { leaflet } from "leaflet";

let map = L.map('map').setView([43.216, 2.35], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let stationMarker = L.marker([43.2181, 2.3518]).addTo(map);
stationMarker.bindPopup("<b>Gare SNCF - Carcassonne</b><br>43.2181, 2.3518");

let castleMarker = L.marker([43.2068, 2.364]).addTo(map);
castleMarker.bindPopup("<b>Cité de Carcassonne</b><br>43.2068, 2.364");

let airportIcon = L.icon({
    iconUrl: 'src/assets/plane-icon.svg',
    iconSize: [38, 95]
});
let airportMarker = L.marker([43.216, 2.308], {icon: airportIcon}).addTo(map);
airportMarker.bindPopup("<b>Aéroport de Carcassonne</b><br>43.216, 2.308");