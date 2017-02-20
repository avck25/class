/*function foo(x) {
    console.log(typeof x, x);
}*/

/*global $*/
(function () {
    'use strict';

    var tagInput = $('#tag'),
        pictures,
        index = 0,
        imgElem = $('#picture figure img'),
        titleElem = $('#picture h2'),
        slideshowButton = $('#slideshow'),
        interval;

    function refreshPicture() {
        //imgElem.attr('src', pictures[index].media.m.replace('_m', ''));
        //titleElem.text(pictures[index].title);

        imgElem./*slideUp*/fadeOut('slow', function () {
            imgElem.attr('src', pictures[index].image);
            titleElem.text(pictures[index].title);
            imgElem./*slideDown*/fadeIn('slow');
        });

    }

    $('#go').click(function () {
        var tag = tagInput.val();
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            { tags: tag, format: 'json' },
            function (data) {
                pictures = data.items.map(function (picture) {
                    return {
                        image: picture.media.m.replace('_m', ''),
                        title: picture.title
                    };
                });
                $('#picture').show();
                refreshPicture();
            });
    });

    $('#left').click(function () {
        if (--index < 0) {
            index = pictures.length - 1;
        }
        refreshPicture();
    });

    function right() {
        if (++index === pictures.length) {
            index = 0;
        }
        refreshPicture();
    }

    $('#right').click(function () {
        right();
    });

    slideshowButton.click(function () {
        if (interval) {
            clearInterval(interval);
            slideshowButton.text('Start Slideshow');
            return;
        }
        slideshowButton.text('Stop Slideshow');
        interval = setInterval(right, 2000);
        /*setInterval(function () {
            $('#right').trigger('click');
        }, 2000);*/
    });

} ());