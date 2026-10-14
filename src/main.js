import { leaflet } from "leaflet";

let map = L.map('map').setView([43.216, 2.35], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const infoStation = {
  coordinates: [43.2181, 2.3518],
  name: "Gare SNCF - Carcassonne"
}

const infoCastle = {
  coordinates: [43.2068, 2.364],
  name: "Cité de Carcassonne<"
}

const infoAirport = {
  coordinates: [43.216, 2.308],
  name: "Aéroport de Carcassonne"
};

let stationMarker = L.marker(infoStation.coordinates).addTo(map);
stationMarker.bindPopup(`<b>${infoStation.name}</b><br>${infoStation.coordinates[0]}, ${infoStation.coordinates[1]}`);

let castleMarker = L.marker(infoCastle.coordinates).addTo(map);
castleMarker.bindPopup(`<b>${infoCastle.name}</b><br>${infoCastle.coordinates[0]}, ${infoCastle.coordinates[1]}`);

let airportIcon = L.icon({
    iconUrl: 'src/assets/plane-icon.svg',
    iconSize: [38, 95]
});
let airportMarker = L.marker(infoAirport.coordinates, {icon: airportIcon}).addTo(map);
airportMarker.bindPopup(`<b>${infoAirport.name}</b><br>${infoAirport.coordinates[0]}, ${infoAirport.coordinates[1]}`);