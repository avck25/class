/*global google*/

(function () {
    'use strict';

    var bmgLoc = { lat: 40.09666929459222, lng: -74.2212019262314 },
        map = new google.maps.Map(
            document.getElementById('map'),
            {
                zoom: 16,
                center: bmgLoc,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            }
        );

    map.addListener('center_changed', function () {
        console.log(map.getCenter().lat(), map.getCenter().lng());
    });

    var bmgMarker = new google.maps.Marker({
        position: bmgLoc,
        map: map,
        //icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_old_Beis_Madrash_Building_of_BMG.jpg/250px-The_old_Beis_Madrash_Building_of_BMG.jpg'
        icon: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_old_Beis_Madrash_Building_of_BMG.jpg/250px-The_old_Beis_Madrash_Building_of_BMG.jpg',
            scaledSize: new google.maps.Size(64, 32)
        }
    });

    bmgMarker.addListener('click', function () {
        //map.panTo(bmgLoc);
        map.setCenter(bmgLoc);

        infoWindow.setContent(`
            Beth Medrash Govoha (Hebrew: בית מדרש גבוה‎‎)(lit: Higher, or advanced, House of Study) is a Haredi yeshiva located in Lakewood Township, New Jersey.It is commonly known as BMG, or Lakewood Yeshiva.

It was founded in 1943 by Rabbi Aharon Kotler and Rabbi Nosson Meir Wachtfogel.As of 2012, the yeshiva has 6, 500 married and undergraduate students, [1] making it one of the largest yeshivas in the world.Over the years, the roshei yeshiva of BMG have all been associated with the Kotler family, beginning with Rabbi Aharon Kotler from 1943 until his death in 1962; Rabbi Shneur Kotler, his son, who led the yeshiva from 1962 until his death in 1982; and the present roshei yeshiva, Rabbi Malkiel Kotler (son of Shneur Kotler), Rabbi Dovid Schustal (son -in-law of Shneur Kotler), Rabbi Yerucham Olshin and Rabbi Yisroel Neuman (sons -in-law of Rabbi Dov Schwartzman).[1] Rabbis Olshin, Schustal and Neuman are married to grandchildren of Rabbi Aharon Kotler.The CEO of the yeshiva is Aron Kotler, the brother of Malkiel Kotler and a grandson of Aharon Kotler.

        To manage the huge enrollment, the four roshei yeshiva divide up the times they deliver shiurim (Torah lectures) in the various battei medrash (study halls) on campus.[2] There are also 240 roshei chabura (heads of small study groups) who guide and encourage groups of students in the yeshiva's trademark style of independent learning.</br>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">Wikipedia</a>
        `);
        infoWindow.open(map, bmgMarker);
    });

    var jmhsLoc = { lat: 40.0897175105734, lng: -74.26008322811128 },
        jmhs = new google.maps.Marker({
            position: jmhsLoc,
            map: map
        });

    jmhs.addListener('click', function () {
        infoWindow.setContent('Jackson Memorial High School');
        infoWindow.open(map, jmhs);
    });

    var infoWindow = new google.maps.InfoWindow({
        //content: 'BMG'
        maxWidth: 250
    });

    var latLngBounds = new google.maps.LatLngBounds();
    latLngBounds.extend(bmgLoc);
    latLngBounds.extend(jmhsLoc);
    map.panToBounds(latLngBounds);
} ());