/*global google, $*/
(function () {
    'use strict';

    var map = new google.maps.Map(
        //document.getElementById('map'),
        $('#map')[0],
        {
            zoom: 16,
            center: { lat: 40.09666929459222, lng: -74.2212019262314 },
            mapTypeId: google.maps.MapTypeId.SATELLITE
        }
    ),
        tagInput = $('#tags'),
        numResultsInput = $('#numResults'),
        infoWindow = new google.maps.InfoWindow({
            maxWidth: 250
        }),
        placesList = $('#places'),
        markers = [];

    $('#go').click(function () {
        $.getJSON('http://api.geonames.org/wikipediaSearch?callback=?',
            {
                q: tagInput.val(),
                maxRows: numResultsInput.val(),
                username: 'slubowsky',
                type: 'json'
            },
            function (data) {
                var bounds = new google.maps.LatLngBounds();

                data.geonames.forEach(function (place) {
                    var loc = { lat: place.lat, lng: place.lng },
                        marker = new google.maps.Marker({
                            position: loc,
                            map: map,
                            title: place.title,
                            icon: place.thumbnailImg ? {
                                url: place.thumbnailImg,
                                scaledSize: new google.maps.Size(64, 32)
                            } : null
                        });

                    marker.addListener('click', function () {
                        infoWindow.setContent(place.summary +
                            '<br><a target="_blank" href="https://' + place.wikipediaUrl + '">Wikipedia</a>'
                        );
                        infoWindow.open(map, marker);
                    });

                    markers.push(marker);
                    bounds.extend(loc);

                    $('<li><img src="' + (place.thumbnailImg || 'default.png') + '"/> ' +
                        place.title + '</li>')
                        .appendTo(placesList)
                        .click(function () {
                            map.panTo(loc);
                            map.setZoom(15);
                        });
                });

                map.fitBounds(bounds);
            }
        );
    });

    $('#clear').click(function () {
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        placesList.empty();
    });

    $('#sidebar').resizable({
        handles: "e",
        resize: function () {
            google.maps.event.trigger(map, 'resize');
        }
    });
} ());