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

// code to clear markers
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
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

