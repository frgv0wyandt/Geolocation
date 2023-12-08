function init() {
    if (navigator.geolocation) {
        document.getElementById('msg').innerText =
            'Geolocation service is trying to find you...';
        navigator.geolocation.getCurrentPosition(success, fail);
    } else {
        document.getElementById('msg').innerText =
            'Your browser does not support Geolocation service';
    }
}

document.addEventListener('DOMContentLoaded', init);

function fail(position) {
    document.getElementById('msg').innerText =
        'Geolocation service cannot find you at this time.';
}

function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    document.getElementById('msg').innerHTML =
        'Found you at...<br>Latitude: ' + lat + ' , Longitude: ' + lng;

    const latlng = new google.maps.LatLng(lat, lng);
    const options = { zoom: 18, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
    const map = new google.maps.Map(document.getElementById('map'), options);
    const marker = new google.maps.Marker({ position: latlng, map: map, title: 'You are here' });
}
