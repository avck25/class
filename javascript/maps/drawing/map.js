/*global google*/
(function() {
    'use strict';

    var drawings = [];

    var map = new google.maps.Map(document.getElementById('map'),
        {
            center: {lat: -34.397, lng: 150.644},
            zoom: 15
        });

    var drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
        //console.log('overlaycomplete', event);
        //console.log(JSON.stringify(event.overlay));
        var overlay = event.overlay;
        if (event.type === google.maps.drawing.OverlayType.MARKER) {
            //localStorage.lat = event.overlay.getPosition().lat();
            //localStorage.lng = event.overlay.getPosition().lng();
            //localStorage.marker = JSON.stringify(event.overlay.getPosition());
            drawings.push({type: google.maps.drawing.OverlayType.MARKER, position: overlay.getPosition()});
        } else if (event.type === google.maps.drawing.OverlayType.CIRCLE) {
            drawings.push({type: google.maps.drawing.OverlayType.CIRCLE, center: overlay.getCenter(), radius: overlay.getRadius()});
        }
        localStorage.drawings = JSON.stringify(drawings);
    });

    //if (localStorage.lat && localStorage.lng) {
    /*if(localStorage.marker) {
        new google.maps.Marker({
            //position: {lat: parseFloat(localStorage.lat), lng: parseFloat(localStorage.lng)},
            position : JSON.parse(localStorage.marker),
            map: map
        });
    }*/

    if(localStorage.drawings) {
        drawings = JSON.parse(localStorage.drawings);
        drawings.forEach(function (drawing) {
            switch (drawing.type) {
                case google.maps.drawing.OverlayType.MARKER:
                    new google.maps.Marker({
                        position : drawing.position,
                        map: map
                    });
                break;
                case google.maps.drawing.OverlayType.CIRCLE:
                    new google.maps.Circle({
                        center : drawing.center,
                        radius: drawing.radius,
                        map: map
                    });
            }
        });
    }
}())