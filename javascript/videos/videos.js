/*global $*/

/*jQuery will call out function when DOM is ready*/
$(function () {
    'use strict';

    var videoList = $('#sidebar ul'),
        videoElem = $('video');

    $.getJSON('videos.json', function (videos) {
        videos.forEach(function (video) {
            //console.log(video);
            $('<li><img src="' + (video.picture || 'images/default.png') + '"/> ' +
                video.title + '</li>')
                .appendTo(videoList)
                .click(function () {
                    videoElem.attr('src', video.url).show();
                    //videoElem[0].play();
                });
        });
    });
});