'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VydmVlcjEiLCJhIjoiY2xia3lnanE0MDJibjNycG1hZHhicm9udiJ9.BP5qXC7I9CRjvBJbkDpGyA';
const round = document.querySelector('.round')
const message = document.querySelector('.message')

function select(selector, parent = document){
    return parent.querySelector(selector)
}

const map = new mapboxgl.Map({
    container: 'map',

    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 0],
    pitch: 40,
    zoom: 16,
   attributionControl: false,
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
    color:'#3898ff'
});

function getLocation(position){
    const{ longitude, latitude} = position.coords;

    if(longitude && latitude) {
        map.setCenter([longitude, latitude]);
        marker.setLngLat([longitude, latitude]).addTo(map);
       // setTimeout(() => {round.style.display = 'none'}, 750)
    }
}

function errorHandler(error){
    round.style.animationPlayState = 'paused'
   
    console.log(error.message)
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

/*
The watchPosition() method is used to register a handler function that will
be called automatically each time the position of the device changes
*/
if(navigator.geolocation){
    navigator.geolocation.watchPosition(getLocation, errorHandler)
}else{

   
    console.log('GeoLocation is not supported by this browser')
}