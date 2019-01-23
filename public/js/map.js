const att = document.getElementById('att');
const loc = document.getElementById('loc');
const L = 'http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js';
if (att != null) {
  const cordenaites = att.innerHTML.split(',');
  const mymap = L.map('mapid').setView([cordenaites[0], cordenaites[1]], 17);
  L.marker([cordenaites[0], cordenaites[1]]).addTo(mymap);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(mymap);
} else {
  const mymap = L.map('mapid').setView([31.533425, 35.089504], 17);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(mymap);
  let flag = 0;
  mymap.on('click', onMapClick);

  function onMapClick(e) {
    if (flag === 0) {
      loc.value = `${e.latlng.lat},${e.latlng.lng}`;
      marker = L.marker(e.latlng).addTo(mymap);
      flag = 1;
    } else if (flag === 1) {
      flag = 0;
      mymap.removeLayer(marker);
    }
  }
}
