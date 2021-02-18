let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 49.457413,
            lng: 6.062938
        }
    });
}


// set new location, add marker, reset zoom.
// code help from https://www.webucator.com/how-to/how-add-marker-google-map.cfm
function newLocation(newLat, newLng) {
        map.setCenter({
        lat: newLat,
        lng: newLng,
        zoom: 5
    });
    map.setZoom(14);
    var marker = new google.maps.Marker({
        position: {lat:newLat, lng:newLng},
        map: map
    })
    markers.push(marker);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

$("document").ready(function () {

    $("#england").on('click', function () {
        clearMarkers();
        newLocation(51.4560, -0.3415);
    });
    $("#wales").on('click', function () {
        clearMarkers();
        newLocation(51.4782, -3.1826);
    });
    $("#scotland").on('click', function () {
        clearMarkers();
        newLocation(55.9422, -3.2409);
    });
    $("#ireland").on('click', function () {
        clearMarkers();
        newLocation(53.3352, -6.2285);
    });
    $("#france").on('click', function () {
        clearMarkers();
        newLocation(48.9245, 2.3602);
    });
    $("#italy").on('click', function () {
        clearMarkers();
        newLocation(41.9341, 12.4547);
    });

})







// 
// function changeCenter(location) {
//             var location = {
//                 lat: "${cityInfo[`${country}`][lat]}",
//                 lng: "${cityInfo[`${country}`][lng]}"
//             }
//             map.setCenter(location);

//         }

    // var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // var locations = [
    //     { lat: 40.785091, lng: -73.968285 },
    //     { lat: 41.084045, lng: -73.874245 },
    //     { lat: 40.754932, lng: -73.984016 }
    // ];

    // var markers = locations.map(function(location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length]
    //     });
    // });

    // var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });








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