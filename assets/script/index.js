'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VydmVlcjEiLCJhIjoiY2xia3lnanE0MDJibjNycG1hZHhicm9udiJ9.BP5qXC7I9CRjvBJbkDpGyA';
const round = document.querySelector('.round')
const message = document.querySelector('.message')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true,
        watchPosition: true
    }
});


function getLocation(position) {

    const { altitude, latitude, longitude } = position.coords



    const map = new mapboxgl.Map({
        container: 'row',

        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: 16,
        attributionControl: false,
    });
    const marker = new mapboxgl.Marker({
        color: "red",
        draggable: true
    }).setLngLat([longitude, latitude])
        .addTo(map);
    map.getUiSettings().setAttributionEnabled(false);
    map.getUiSettings().setLogoEnabled(false);
}
function errorHandler(error) {
    round.style.display = 'none'
    message.style.display = 'inline'
    console.log('Unable to check your location')
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler)
} else {


    console.log('GeoLocation is not supported by this browser')
}



function select(selector, parent = document){
    return parent.querySelector(selector)
}



