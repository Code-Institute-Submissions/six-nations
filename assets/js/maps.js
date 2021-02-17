function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
       zoom: 4,
        center: {
            lat: 49.457413, 
            lng: 6.062938
        } 
    });


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}





// function initMap() {
//     var map;
//     var service;
//     var infowindow;

//     function initialize() {
//         var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: pyrmont,
//             zoom: 15
//         });

//         var request = {
//             location: pyrmont,
//             radius: '500',
//             type: ['restaurant']
//         };

//         service = new google.maps.places.PlacesService(map);
//         service.nearbySearch(request, callback);
//     }

//     function callback(results, status) {
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//             }
//         }
//     }
// }