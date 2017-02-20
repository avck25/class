/*function foo(x) {
    console.log(typeof x, x);
}*/

/*global $*/
(function () {
    'use strict';

    var tagInput = $('#tag'),
        picturesDiv = $('#pictures');

    $('#go').click(function () {
        var tag = tagInput.val();
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            { tags: tag, format: 'json' },
            function (data) {
                data.items.forEach(function (picture) {
                    picturesDiv.append(
                        '<figure><img src="' + picture.media.m + '"><figcaption><h2>' +
                        picture.title + '</h2></figcaption></figure>'
                    );
                });
            });
    });


} ());