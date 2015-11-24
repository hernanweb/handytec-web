var map = null;
var latitude;
var longitude;

google.maps.Map.prototype.panToWithOffset = function(latlng, offsetX, offsetY) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function() {
        var proj = this.getProjection();
        var aPoint = proj.fromLatLngToContainerPixel(latlng);
        aPoint.x = aPoint.x+offsetX;
        aPoint.y = aPoint.y+offsetY;
        map.panTo(proj.fromContainerPixelToLatLng(aPoint));
    }; 
    ov.draw = function() {}; 
    ov.setMap(this); 
};

function inicializemap() {
    latitude = -0.199311;
    longitude = -78.486646;

    var handytec_location = new google.maps.LatLng(latitude, longitude);

    // var image = new google.maps.MarkerImage('images/marker.png', new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(32, 32));

    var image = new google.maps.MarkerImage(
        'images/other/marker.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(42, 68)
    );

    var mapCoordinates = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        backgroundColor: '#ffffff',
        zoom: 18,
        disableDefaultUI: true,
        center: mapCoordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        styles: [{"featureType": "all", "elementType": "all", "stylers": [{"invert_lightness": true }, {"saturation": 10 }, {"lightness": 30 }, {"gamma": 0.5 }, {"hue": "#435158"} ] }, {featureType: "poi", stylers: [{ visibility: "off" } ] } ]
    };

    map = new google.maps.Map(document.getElementById('map-canvas-holder'), mapOptions);
    marker = new google.maps.Marker({
        position: handytec_location,
        raiseOnDrag: false,
        icon: image,
        map: map,
        animation: google.maps.Animation.DROP,
        draggable: false,
        title: 'Matriz'
    });

    google.maps.event.addListener(map, 'zoom_changed', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    setTimeout(function() { map.panToWithOffset(handytec_location, -300, 0); }, 1000);
}