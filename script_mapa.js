//Establecer el punto inicial de nuestro mapa y el nivel de zoom
let map= L.map('map').setView([19.284989729251638, -99.67626310206803],15);


//integrar el mapa base

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//se agregara la funcionalidad de el mapa en JS para la seleccion del menu desplegable
//se hace a travez del id del objeto
//En este caso el id es select-campus

document.getElementById("select-campus").addEventListener('change',function(e){
let coords = e.target.value.split(",");
map.flyTo(coords,16);


})