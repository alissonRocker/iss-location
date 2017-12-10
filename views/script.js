
var cordinates = [];

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false,
        zoom: 3
    });

    var iss = new google.maps.Marker({
        map: map,
        icon: 'img/iss.png',
        position: {lat: 0, lng: 0},
    });

    // Search location iss
    var search = setInterval(function() {
        
        $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

            if(data.message == "success") {
                var _lat = data.iss_position.latitude;
                var _lng = data.iss_position.longitude;

                var LatLng = new google.maps.LatLng(_lat, _lng);

                cordinates.push(LatLng);

                var flightCordinates = new google.maps.Polyline({
                    path: cordinates,
                    geodesic: true,
                    strokeColor: '#00FF00',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
        
                flightCordinates.setMap(map);

                iss.setPosition(LatLng);
                map.panTo(LatLng);
            }

        });

    }, 3000);

}
