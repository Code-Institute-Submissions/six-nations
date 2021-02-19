var markers = [];
var prev_infowindow = false;
const locations = {
    england: {
        latitude: "51.4560",
        longitude: "-0.3415"
    },
    wales: {
        latitude: "51.4782",
        longitude: "-3.1826"
    },
    scotland: {
        latitude: "55.9422",
        longitude: "-3.2409"

    },
    ireland: {
        latitude: "53.3352",
        longitude: "-6.2285"
    },
    france: {
        latitude: "48.9245",
        longitude: "2.3602"
    },
    italy: {
        latitude: "41.9341",
        longitude: "12.4547"
    }
}

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
    });
    map.setZoom(14);
    var marker = new google.maps.Marker({
        position: { lat: newLat, lng: newLng },
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

// https://developers.google.com/maps/documentation/javascript/examples/place-search
// create markers
function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
    });

   // https://stackoverflow.com/questions/2223574/google-maps-auto-close-open-infowindows
    // close/open info window
    var infowindow = new google.maps.InfoWindow({
        content: place.name,
    });
 
    marker.addListener("click", () => {
        if (prev_infowindow) {
            prev_infowindow.close();
        }
        prev_infowindow = infowindow;
        infowindow.open(map, marker);
    });
    
    markers.push(marker);
}


// https://developers.google.com/maps/documentation/javascript/places#place_search_requests
// function to find local hospitality
const localHospitality = (hospitalityType) => {
    var request = {
        type: hospitalityType,
        location: map.getCenter(),
        radius: '900'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers();
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }
}




$("document").ready(function () {

    // find local hospitality
    $("#hotels").on('click', function () {
        localHospitality(['lodging']);
    })
    $("#restuarants").on('click', function () {
        localHospitality(['restaurant']);
    })
    $("#bars").on('click', function () {
        localHospitality(['bar']);
    })

    // change center of map
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

