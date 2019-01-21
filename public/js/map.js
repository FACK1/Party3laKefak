const att = document.getElementById('att').innerHTML;

const cordenaites = att.split(',');
const mymap = L.map('mapid').setView([cordenaites[0], cordenaites[1]], 17);
L.marker([cordenaites[0], cordenaites[1]]).addTo(mymap);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(mymap);
